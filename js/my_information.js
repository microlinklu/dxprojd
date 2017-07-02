/**
 * Created by luwen on 2017/6/26.
 */
function submitInfo(){
    $('input').attr('disabled','disabled');
    //将数据提交服务器
    var age=$("#0").val();
    var job=$("#1").val();
    var degree=$("#2").val();
    var nickname=$("#3").val();
    $.ajax({
        url:"http://www.chinadxr.cn:3000/users/changMyInfo",
        type:'post',
        datatype:'jsonp',
        data:{
            age:age,
            job:job,
            degree:degree,
            nickname:nickname,
            phone:localStorage.getItem("phonenumber")
        }

    })
}
function getMyInfo(){
    $.ajax({
        url:"http://www.chinadxr.cn:3000/users/getMyInfo",
        type:'get',
        datatype:'jsonp',
        data:{
            phone:localStorage.getItem("phonenumber"),
                    },
        cache:false,
        success:function(data){
            $("#0").val(data.data[0].age);
            $("#1").val(data.data[0].job);
            $("#2").val(data.data[0].degree);
            $("#3").val(data.data[0].nickname);
            $("#name").val(data.data[0].name);
            if(data.data[0].sex==0)
            $("#sex").val('男')
            else
                $("#sex").val('女')
        }
    })
}
window.onload=getMyInfo();