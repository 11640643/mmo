<?php /*a:1:{s:79:"D:\phpstudy_pro\WWW\miningMachineOne\application\manage\view\kefu\kefu_add.html";i:1660980774;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>添加管理员</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" href="/resource/layuiadmin/layui/css/layui.css" media="all">
	<link rel="stylesheet" href="/resource/css/mylay.css">
</head>
<body>
<div style="padding: 20px; background-color: #F2F2F2;">
	<div class="layui-row layui-col-space15">
		<div class="layui-col-md12">
			<div class="layui-card">
				<div class="layui-card-body">
					<form class="layui-form layui-form-pane" action="">
						
						<div class="layui-form-item">
							<label class="layui-form-label">链接</label>
							<div class="layui-input-block">
								<input type="text" name="title" autocomplete="off" placeholder="请输入客服链接" class="layui-input">
							</div>
						</div>
						
<!--						<div class="layui-form-item">-->
<!--							<div class="layui-upload">-->
<!--								<button type="button" class="layui-btn" id="kefu-update">图片上传</button>-->
<!--								<blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">-->
<!--									预览图：-->
<!--									<div class="layui-upload-list" id="slide-preview"></div>-->
<!--								</blockquote>-->
<!--							</div>-->
<!--						</div>-->
						<div class="layui-form-item" style="margin-top: 40px;text-align: center;">
							<div class="layui-input-block">
								<button class="layui-btn" lay-submit lay-filter="kefuList" data-suburi="kefu_add">立即提交</button>
								<button type="reset" class="layui-btn layui-btn-primary">重置</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="/resource/layuiadmin/layui/layui.js"></script>
<script src="/resource/js/manage/init_date.js"></script>
<script src="/resource/js/manage/kefu.js"></script>


<script type="text/javascript" src="/resource/plugs/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="/resource/plugs/ueditor/ueditor.all.min.js"></script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" src="/resource/plugs/ueditor/lang/zh-cn/zh-cn.js"></script>
</body>
</html>