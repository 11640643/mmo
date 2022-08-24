<?php
namespace app\api\controller;

use app\api\controller\BaseController;
use think\Db;

class IndexController extends BaseController{
	
	/**
	 * 系统配置信息
	 */
	public function systemconfig(){
		$param = receiveJson();
		$lang	  = !empty($param['lang']) ? $param['lang'] : 'cn';	// 语言类型
		$data = model('Setting')->find();
		if($lang == 'cn'){
			$datas['title'] = $data['title'];
			$datas['currency'] = $data['currency'];
			$datas['pic_s'] = $data['pic_s'];
			$datas['trcaddress'] = $data['trcaddress'];
			$datas['service'] = $data['service'];
			$datas['info_w'] = $data['info_w'];
			$datas['regurl'] = $data['regurl'];
			$datas['reg_award'] = $data['reg_award'];
			$datas['prompt_popup_picture'] = $data['prompt_popup_picture'];
			$datas['experience_money_pictures'] = $data['experience_money_pictures'];
		} else {
			$datas['title'] = $data['title'];
			$datas['currency'] = $data['currency'];
			$datas['pic_s'] = $data['pic_s'];
			$datas['trcaddress'] = $data['trcaddress'];
			$datas['service'] = $data['service'];
			$datas['info_w'] = $data['info_w'];
			$datas['regurl'] = $data['regurl'];
			$datas['reg_award'] = $data['reg_award'];
			$datas['prompt_popup_picture'] = $data['prompt_popup_picture'];
			$datas['experience_money_pictures'] = $data['experience_money_pictures'];
		}
		return json($datas);
	}
	
	/**
	 * App帮助
	 */
	public function helps(){
		$param = receiveJson();
		$lang	  = !empty($param['lang']) ? $param['lang'] : 'en';	// 语言类型
		$list = model('notice')->where('lang', $lang)->field('id,title,content,add_time,state')->order('add_time', 'asc')->select();
		$data['code'] = 1;
		$data['data'] = $list;
		return json($data);
	}
	
	
	
	
	
	
}