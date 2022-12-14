<?php /*a:1:{s:77:"D:\phpstudy_pro\WWW\miningMachineOne\application\manage\view\index\login.html";i:1642754576;}*/ ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>登入 - <?php echo htmlentities($title); ?></title>
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/resource/layuiadmin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/resource/layuiadmin/style/admin.css" media="all">
<link rel="stylesheet" href="/resource/layuiadmin/style/login.css" media="all">
</head>
<body>
    <div class="layadmin-user-login layadmin-user-display-show" id="LAY-user-login" style="display: none;">
        <div class="layadmin-user-login-main">
            <div class="layadmin-user-login-box layadmin-user-login-header">
                <h2>登入 Login</h2>
                <p></p>
            </div>
            <div class="layadmin-user-login-box layadmin-user-login-body layui-form">
                <div class="layui-form-item">
                    <label class="layadmin-user-login-icon layui-icon layui-icon-username" for="LAY-user-login-username"></label>
                    <input type="text" name="user" id="LAY-user-login-username" lay-verify="required" placeholder="用户名" class="layui-input">
                </div>
                <div class="layui-form-item">
                    <label class="layadmin-user-login-icon layui-icon layui-icon-password" for="LAY-user-login-password"></label>
                    <input type="password" name="pass" id="LAY-user-login-password" lay-verify="required" placeholder="密码" class="layui-input">
                </div>
                <div class="layui-form-item">
                    <div class="layui-row">
                        <div class="layui-col-xs7">
                            <label class="layadmin-user-login-icon layui-icon layui-icon-vercode" for="LAY-user-login-vercode"></label>
                            <input type="text" name="code" id="LAY-user-login-vercode" lay-verify="required" placeholder="图形验证码" class="layui-input">
                        </div>
                        <div class="layui-col-xs5">
                            <div style="margin-left: 10px;">
                                <img src="/manage/index/code" class="layadmin-user-login-codeimg" id="codeimg" onClick="flushr()">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="layui-form-item">
                    <button type="submit" id="LAY-user-login-submit" class="layui-btn layui-btn-fluid" lay-submit lay-filter="LAY-user-login-submit">登 入</button>
                </div>
            </div>
        </div>
    </div>

<script src="/resource/layuiadmin/layui/layui.js"></script>
<script>
    layui.use(['layer', 'form'], function(){
        var $  = layui.$
        ,layer = layui.layer
        ,form  = layui.form;

        $('#LAY-user-login-vercode').on('keydown', function (event) {
            if (event.keyCode == 13) {
                $("#LAY-user-login-submit").trigger("click");
                return false
            }
        });

        //提交
        form.on('submit(LAY-user-login-submit)', function(data){
            $.ajax({
                url:"/manage/index/login",
                data:data.field,
                type:"POST",
                dataType:"json",
                timeout:15000,
                beforeSend:function(){
                    layer.load(1);
                },
                success:function(msg){
                    switch (msg) {
                        case 'code':
                            var alertstr = '验证码输入错误！';
                            var layicon  = 2;
                            $("#LAY-user-login-vercode").val("");
                            $("#LAY-user-login-vercode").focus();
                            flushr();
                            break;
                        case 1:
                            var alertstr = '登入成功';
                            var layicon  = 1;
                            break;
                        default:
                            var alertstr = '登入失败';
                            var layicon  = 2;
                            window.location.reload();
                            break;
                    }
                    layer.msg(alertstr, {time:1000,icon: layicon},function(){
                        if(msg==1){
                            location.href = '/manage/index'; //后台主页
                        }
                    });
                },
                complete: function () {
                    layer.closeAll("loading");
                }
            });
            return false;
        });
        // 重载验证码
        window.flushr = function(){
            var code_src = $("#codeimg").attr('src');
            $("#codeimg").attr('src', code_src+'?'+Math.random());
        }
    });
</script>
</body>
</html>