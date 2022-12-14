<?php
namespace app\manage\model;

use think\Model;
use think\Db;

class UserWithdrawalsModel extends Model{
	//表名
	protected $table = 'user_withdrawals';

	/**
	 * 风控审核view
	 */
	public function controlAuditView(){
		$param = input('get.');

		$data = $this->where('id',$param['id'])->find();
		$data['username'] = model("Users")->where('id', $data['uid'])->value('username');
		$data['fee'] = $data['amount'] - $data['price'];
// 		$data['amount'] = $data['price'] - ($data['price']*$data['fee']/100);
        // print_r($data); exit;
		return array(
			'data'	=>	$data
		);
	}

	/**
	 * 风控审核
	 */
	public function controlAudit(){
		$param = input('post.');
		if(!$param) return '提交失败';

		$controlAuditTime = cache('CA_controlAuditTime'.session('manage_userid')) ? cache('CA_controlAuditTime'.session('manage_userid')) : time()-2;
		if(time() - $controlAuditTime < 1){
			return ' 2 秒内不能重复提交';
		}
		cache('CA_controlAuditTime'.session('manage_userid'), time(), 10);

		//获取订单信息
		$where[] = array('id','=',$param['id']);
		$where[] = array('state','=',3);
		$orderInfo = $this->where($where)->find();
		if (!$orderInfo) return '订单不存在';
		$orderInfo = $orderInfo->toArray();
		$user = model('Users')->where('id', $orderInfo['uid'])->find();
		Db::startTrans();
		try{
			if($param['state'] ==  1){
				$this->where('id', $param['id'])->update([
					'state'		=> 1,
					'remarks'	=> $param['remarks'],
					'set_time'	=> time()
				]);
				model('common/TradeDetails')->where('order_number', $orderInfo['order_number'])->where('state', 3)->update(['state'=> 1]);
				//添加操作日志
				model('Actionlog')->actionLog(session('manage_username'),'审核订单号为'.$orderInfo['order_number'].'的提现订单。处理状态：审核通过',1);
				
			} else {
				//构造备注信息
				$remarksTemp = '订单 '.$orderInfo['order_number'].' 取款失败，退回资金：'.$orderInfo['price'];
				$remarks = (isset($param['remarks']) && $param['remarks'] && $param['remarks'] !== $orderInfo['remarks']) ? $param['remarks'] : $remarksTemp;
				//更新订单
				$orderUpdateArray = array(
					'state'		=>	2,
					'set_time'	=>	time(),
					'remarks'	=>	$remarks
				);
				$this->where('id',$param['id'])->update($orderUpdateArray);
	    		model('common/TradeDetails')->where('order_number', $orderInfo['order_number'])->where('state', 3)->update(['state'=> 2]);
				$trade_number = 'L'.trading_number();//交易号
				$trade_before_balance = $user['balance'];
				$account_balance = $trade_before_balance + $param['price'];	
				//生成流水
	    		$tradeDetails = array(
	    			'uid'                   => $orderInfo['uid'],
	    			'username'              => $user['username'],
	    			'trade_time'            => time(),
	    			'order_number'          => $orderInfo['order_number'],
	    			'trade_number'          => $trade_number,
	    			'trade_type'            => 7,
	    			'state'   		        => 1,
	    			'trade_before_balance'  => $trade_before_balance,
	    			'account_balance'       => $account_balance,
	    			'trade_amount'          => $param['price'],
	    			'remarks'               => '提现驳回'
	    		);
	    		model('common/TradeDetails')->tradeDetails($tradeDetails);
	    		// 提现金额退回
				model('Users')->where('id', $orderInfo['uid'])->setInc('balance', $param['price']);
				//添加操作日志
				model('Actionlog')->actionLog(session('manage_username'),'审核订单号为'.$orderInfo['order_number'].'的提现订单。处理状态：审核未通过',1);
			}
			Db::commit();
		} catch (\Exception $e) {
            // 回滚事务
            Db::rollback();
            return '操作失败'.$e->getMessage().$e->getLine();
        }

		return 1;
	}

	/**
	 * 财务处理
	 */
	public function financialAudit(){
		$param = input('post.');
		if(!$param) return '提交失败';

		$controlAuditTime = cache('CA_financialAuditTime'.session('manage_userid')) ? cache('CA_financialAuditTime'.session('manage_userid')) : time()-2;
		if(time() - $controlAuditTime < 2){
			return ' 2 秒内不能重复提交';
		}
		cache('CA_financialAuditTime'.session('manage_userid'), time(), 10);
		
		$orderNumber = $param['order_number'];
		unset($param['order_number']);

		//获取订单信息
		$where[] = array('order_number','=',$orderNumber);
		//$where[] = array('state','=',3);
		$where[] = array('state','>=',3);
		$where[] = array('state','<=',5);
		$orderInfo = $this->where($where)->find();
		if (!$orderInfo) return '订单不存在';
		$orderInfo = $orderInfo->toArray();

		switch ($param['state']) {
			case 1://已支付
				//构造备注信息
				$remarks = (isset($param['remarks']) && $param['remarks'] && $param['remarks'] !== $orderInfo['remarks']) ? $param['remarks'] : '尊敬的用户您好！您的编号为'.$orderInfo['order_number'].' 的提现处理成功，金额￥'.$orderInfo['price'].'元 服务费：￥0.0000元，处理时间：'.date('Y-m-d H:i:s');
				//更新订单
				$orderUpdateArray = array(
					'aid'		=>	session('manage_userid'),
					'state'		=>	$param['state'],
					'set_time'	=>	time(),
					'remarks'	=>	$remarks
				);
				$res = $this->where('id',$orderInfo['id'])->update($orderUpdateArray);
				if(!$res) return '操作失败1';
				//更新流水
				$res2 = model('TradeDetails')->where('order_number',$orderNumber)->update(array('state'=>1));
				if(!$res2) return '操作失败3';
				// 获取余额
				$balance = model('UserTotal')->field('balance')->where('uid',$orderInfo['uid'])->find();
				// 扣除金额
				/*$res2 = model('UserTotal')->where('uid', $orderInfo['uid'])->setDec('frozen_balance', $orderInfo['price']);
				if (!$res2) {
					$this->where('id',$orderInfo['id'])->update($orderInfo);
					return '操作失败2';
				}*/
				// 流水
				$tradeDetailsArray = array(
					'uid'                    =>	$orderInfo['uid'],
					'trade_type'             =>	2,
					'trade_before_balance'   =>	$balance['balance'],
					'trade_amount'           =>	$orderInfo['price'],
					'account_balance'        =>	$balance['balance'],
					//'account_frozen_balance' => $balance['frozen_balance'] - $orderInfo['price'],
					'remarks'                =>	$remarks,
					//'types'                  =>	2,
					'isadmin'                =>	1,
				);
				$res3 = model('common/TradeDetails')->tradeDetails($tradeDetailsArray);
				if(!$res3) {
					$this->where('id',$orderInfo['id'])->update($orderInfo);
					//model('UserTotal')->where('uid', $orderInfo['uid'])->setInc('frozen_balance', $orderInfo['price']);
					return '操作失败3';
				}

				//添加操作日志
				model('Actionlog')->actionLog(session('manage_username'),'处理订单号为'.$orderInfo['order_number'].'的提现订单。处理状态：已支付',1);

				return 1;

				break;
			
			case 2://拒绝支付

				//构造备注信息
				$remarks = (isset($param['remarks']) && $param['remarks'] && $param['remarks'] !== $orderInfo['remarks']) ? $param['remarks'] : '订单 '.$orderInfo['order_number'].' 取款失败，退回资金：'.$orderInfo['price'];

				//更新订单
				$orderUpdateArray = array(
					'aid'		=>	session('manage_userid'),
					'state'		=>	$param['state'],
					'set_time'	=>	time(),
					'remarks'	=>	$remarks
				);
				$res = $this->where('order_number',$orderNumber)->update($orderUpdateArray);
				if(!$res) return '操作失败1';
				//更新流水
				$res1 = model('TradeDetails')->where('order_number',$orderInfo['order_number'])->update(array('state'=>2,'remarks'=>'提现失败，资金已退回'));
				if(!$res1) return '操作失败2';
				//获取用户余额
				$balance = model('UserTotal')->field('balance')->where('uid',$orderInfo['uid'])->find();
				//更新用户余额
				$res2 = model('UserTotal')->where('uid',$orderInfo['uid'])->inc('balance',$orderInfo['price'])->update();
				if(!$res2) {
					$this->where('id',$orderInfo['id'])->update($orderInfo);
					return '操作失败2';
				}

				$tradeDetailsArray = array(
					'uid'                    =>	$orderInfo['uid'],
					'order_number'           =>	$orderInfo['order_number'],
					'trade_type'             =>	13,
					'trade_before_balance'   =>	$balance['balance'],
					'trade_amount'           =>	$orderInfo['price'],
					'account_balance'        =>	$balance['balance'] + $orderInfo['price'],
					//'account_frozen_balance' => $balance['frozen_balance'] - $orderInfo['price'],
					'remarks'                =>	$remarks,
					//'types'                  =>	2,
					'isadmin'                =>	1,
					//'isdaily'                => 2
				);
				$res3 = model('common/TradeDetails')->tradeDetails($tradeDetailsArray);
				if(!$res3) {
					$this->where('id',$orderInfo['id'])->update($orderInfo);
					$res2 = model('UserTotal')->where('uid',$orderInfo['uid'])->dec('balance',$orderInfo['price'])->update();
					return '操作失败3';
				}

				//添加操作日志
				model('Actionlog')->actionLog(session('manage_username'),'处理订单号为'.$orderInfo['order_number'].'的提现订单。处理状态：拒绝支付',1);

				return 1;
				break;
			default:
				return '无须修改';
				break;
		}
	}

	/**
	 * 出款
	 */
	public function withdrawalsPayment(){
		if(!request()->isAjax()) return '非法提交';

		$param = input('post.');
		if(!$param) return '提交失败';

		// 获取出款状态
		// $cashStatus = model('Setting')->where('id','>',0)->value('cash_status');
		// if($cashStatus != 1) return '未开启出款功能';

		// 时间段
		$startTime = mktime(8,0,0,date('m'),date('d'),date('Y'));
		$endTime   = mktime(18,0,0,date('m'),date('d'),date('Y'));
        if(time()<$startTime || time()>$endTime) return '当前不在处理时间段';

        // 获取出款单信息
		$drawInfo = $this->where('id', $param['id'])->find();
		if(!$drawInfo) return '订单不存在';

        // 获取出款配置
        $drawConfig = model('DrawConfig')->where('state',1)->find();
        if(!$drawConfig) return '无可用出款账户';

		// 获取所有充值渠道
		$rechargeArr = model('RechangeType')->field('id,submitUrl')->order('id','asc')->select()->toArray();
		if(!$rechargeArr) return '取款银行不可用 - 1';
		// 匹配渠道
		foreach ($rechargeArr as $key => $value) {
			if (preg_match('/'.$drawConfig['file_name'].'/', $value['submitUrl'])) {
				$rechargeId = $value['id'];
				break;
			}
		}
		if (!isset($rechargeId)) return '取款银行不可用 - 2';
		// 获取银行名称
		$bankName = model('Bank')->where('id', $drawInfo['bank_id'])->value('bank_name');
		if(!$bankName) return '取款银行不可用 - 3';
		// 获取渠道对应的银行代码
		$bankCode = model('Bank')->where(['bank_name'=>$bankName,'pay_type'=>$rechargeId])->value('bank_code');
		if(!$bankCode) return '取款银行不可用 - 4';

		// 构造提交数据
		switch ($drawConfig['id']) {
			case '999':
				$dataArray = [
					'uid'				=>	$drawInfo['uid'],
					'order'				=>	$drawInfo['order_number'],
					'amount'			=>	$drawInfo['price'],
					'account_Name'		=>	$drawInfo['card_name'],
					'account_Number'	=>	$drawInfo['card_number'],
					'bank_Code'			=>	$bankName,
				];
				break;
			
			default:
				$dataArray = [
					'uid'				=>	$drawInfo['uid'],
					'order'				=>	$drawInfo['order_number'],
					'amount'			=>	$drawInfo['price'],
					'account_Name'		=>	$drawInfo['card_name'],
					'account_Number'	=>	$drawInfo['card_number'],
					'bank_Code'			=>	$bankCode,
				];
				break;
		}

		// 出款
		$ch = curl_init();	
		curl_setopt($ch, CURLOPT_URL, $drawConfig['submit_url']);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($dataArray));  
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		curl_close($ch);

		if (!$result) return '已提交';

	    $resultArray = json_decode($result, true);
	    switch ($drawConfig['id']) {
	    	case 1:
	    	case 2:
	    		if(!$resultArray['error_Msg'] && $resultArray['bank_Status']=='I'){
	        		$this->paymentSuccess(['order_number'=>$drawInfo['order_number']]);

					$ajaxStr = 1;
				}else{
					$ajaxStr = $resultArray['error_Msg'].' - '.$resultArray['bank_Status'];
				}
	    		break;

	    	default:
				if ($result == 1 || $result == 'Y') {
	        		$this->paymentSuccess(['order_number'=>$drawInfo['order_number']]);

	        		$ajaxStr = 1;
	        	} else {
	        		$ajaxStr = $result;
	        	}
	    		break;
	    }

	    return $ajaxStr;
	}

	/**
	 * 出款成功
	 */
	public function paymentSuccess($param=[]){
		//更新提现订单
		$this->where('order_number',$param['order_number'])->update(array('state'=>6,'aid'=>session('manage_userid')));
		//获取提现订单信息
		$orderInfo = $this->field('uid,price')->where('order_number',$param['order_number'])->find();

		//更新每日报表
		$reportFormArray = array(
			'uid'		=>	$orderInfo['uid'],
			'type'		=>	2,
			'price'		=>	$orderInfo['price'],
			'isadmin'	=>	1
		);
		model('UserDaily')->updateReportForm($reportFormArray);

		//更新流水
		model('TradeDetails')->where('order_number',$param['order_number'])->update(array('state'=>1));
	}
}
