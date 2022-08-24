<?php /*a:1:{s:82:"D:\phpstudy_pro\WWW\miningMachineOne\application\manage\view\bet\product_edit.html";i:1653140318;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>添加任务</title>
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
                        <form class="layui-form" action="">
                            <div class="layui-form-item">
                                <label class="layui-form-label">英文名称</label>
                                <div class="layui-input-block">
                                    <input type="text" name="name" value="<?php echo htmlentities($data['name']); ?>" autocomplete="off" placeholder="请输入英文名称" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">西班牙名称</label>
                                <div class="layui-input-block">
                                    <input type="text" name="name_ag" value="<?php echo htmlentities($data['name_ag']); ?>" autocomplete="off" placeholder="请输入英文名称" class="layui-input">
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">任务级别</label>
                                <div class="layui-input-block">
                                    <?php foreach($userLevel as $key=>$value): ?>
                                    <input type="radio" name="vip_level" value="<?php echo htmlentities($value['grade']); ?>" title="<?php echo htmlentities($value['name']); ?>"<?php if($value['grade'] == $data['vip_level']): ?> checked<?php endif; ?>>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">每小时收入</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="income" value="<?php echo htmlentities($data['income']); ?>" autocomplete="off" placeholder="请输入每小时收入" class="layui-input">
                                </div>
                                <div class="layui-form-mid layui-word-aux"><?php echo htmlentities($currency); ?></div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">租金</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="price" value="<?php echo htmlentities($data['price']); ?>" autocomplete="off" placeholder="请输入租金" class="layui-input">
                                </div>
                                <div class="layui-form-mid layui-word-aux"><?php echo htmlentities($currency); ?></div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">到期时间</label>
                                <div class="layui-input-inline">
                                    <input type="number" name="day" value="<?php echo htmlentities($data['day']); ?>" autocomplete="off" placeholder="" class="layui-input">
                                </div>
                                <div class="layui-form-mid layui-word-aux"></div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">矿机类型</label>
                                <div class="layui-input-inline">
                                    <label><input type="radio" name="type" value="2" <?php if($data['type'] == 2): ?>checked<?php endif; ?> title="体验矿机" /></label>
                                    <label><input type="radio" name="type" value="1" <?php if($data['type'] == 1): ?>checked<?php endif; ?> title="正式矿机" /></label>
                                </div>
                                <div class="layui-form-mid layui-word-aux"></div>
                            </div>
                            
                            <div class="layui-form-item" style="margin-top: 40px;text-align: center;">
                                <input type="hidden" name="id" value="<?php echo isset($data['id']) ? htmlentities($data['id']) : 0; ?>" class="layui-input">
                                <button class="layui-btn" lay-submit lay-filter="project_edit" data-type="taskEdit">立即提交</button>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="/resource/layuiadmin/layui/layui.js"></script>
<script src="/resource/js/manage/init_date.js"></script>
<script src="/resource/js/manage/bet.js"></script>
<script type="text/javascript">
layui.use(['upload'], function(){
    var $    = layui.$
    ,upload  = layui.upload    // 公告缩略图
    var cover_img_upload = upload.render({
        elem: '.cover_img'
        ,url: '/manage/base/upload'
        ,data: {
            targetFolder: "resource"
        }
        ,size: 5120 //限制文件大小，单位 KB
        ,accept: 'images'
        ,acceptMime: 'image/*'
        ,exts: 'jpg|png|gif|bmp|jpeg'
        ,done: function(res, index, upload){ 
            //如果上传失败
            if(res.code == 0){
                return layer.msg(res.success);
            }
            //上传成功
            this.item.children('div').removeClass('layui-hide').find('img').attr('src', res.success);
            this.item.parent(".layui-form-item").find("input[type='hidden']").val(res.success);
            return layer.msg('上传成功');
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = this.item.children('div').find('p');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                cover_img_upload.upload();
            });
        }
    });
});
</script>
</body>
</html>