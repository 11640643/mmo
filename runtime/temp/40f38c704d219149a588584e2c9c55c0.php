<?php /*a:1:{s:77:"D:\phpstudy_pro\WWW\miningMachineOne\application\manage\view\base\admins.html";i:1652154206;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>管理员管理</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/resource/layuiadmin/layui/css/layui.css" media="all">
</head>
<body>
    <div style="padding: 20px; background-color: #F2F2F2;">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card">
                    <table class="layui-hide" id="admins" lay-filter="admins"></table>
                </div>
            </div>
        </div>
    </div>
    <!-- 头部左侧工具栏 -->
    <script type="text/html" id="toolbarDemo">
        <div class="layui-btn-container layui-btn-group">
            <button type="button" class="layui-btn layui-btn-sm" lay-event="add">
                <i class="layui-icon">&#xe654;</i>
            </button>
        </div>
    </script>
    <!-- 表单元素 -->
    
    
    <script type="text/html" id="action">
        <div class="layui-btn-group">
        <?php if(session('manage_type') == 1){ ?>
            <button type="button" class="layui-btn layui-btn-normal layui-btn-xs" onclick="window.location.href='/manage/Base/admins_set_role?uid={{d.id}}'">权限管理</button>
        <?php  }  ?>
            <button type="button" class="layui-btn layui-btn-xs" lay-event="edit">
                <i class="layui-icon">&#xe642;</i>
            </button>
            <button type="button" class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">
                <i class="layui-icon">&#xe640;</i>
            </button>
        </div>
    </script>

<script src="/resource/layuiadmin/layui/layui.js"></script>
<script src="/resource/js/manage/init_date.js"></script>
<script src="/resource/js/manage/admins.js"></script>
<script>
    layui.use(['table'], function(){
        var $ = layui.$
        ,table = layui.table;

        //方法级渲染
        table.render({
            elem: '#admins'
            ,title: '成员管理'
            ,url: '/manage/base/admins'
            ,method: 'post'
            ,cols: [[
                {checkbox: true, fixed: true}
                ,{field:'manage_type_txt', title: '账户类型', sort: true}
                ,{field:'username', title: '账户', sort: true}
                ,{field:'susername', title: '上级', sort: true}
                ,{title: '操作', width: '20%', toolbar: '#action'}
            ]]
            ,cellMinWidth: 100
            ,toolbar: '#toolbarDemo'
            ,defaultToolbar: ['filter', 'print', 'exports']
            ,totalRow: true
            ,page: {
                layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip']
            }
            ,skin: 'row' //行边框风格
            ,even: true //开启隔行背景
        });

        //监听排序事件
        table.on('sort(admins)', function(obj){ //注：sort 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
            //尽管我们的 table 自带排序功能，但并没有请求服务端。
            //有些时候，你可能需要根据当前排序的字段，重新向服务端发送请求，从而实现服务端排序，如：
            table.reload('admins', {
                initSort: obj //记录初始排序，如果不设的话，将无法标记表头的排序状态。
                ,where: { //请求参数（注意：这里面的参数可任意定义，并非下面固定的格式）
                    sortField: obj.field //排序字段
                    ,sortType: obj.type //排序方式
                }
            });
        });

        active = {
            search: function(){
                //执行重载
                table.reload('admins', {
                    page: {
                        curr: 1 //重新从第 1 页开始
                    }
                    ,where: {
                        username: $("input[name='username']").val()
                        ,ip: $("input[name='ip']").val()
                        ,datetime_range: $("input[name='datetime_range']").val()
                    }
                }, 'data');
            }
        };

        $('.search .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });
    });
</script>
</body>
</html>