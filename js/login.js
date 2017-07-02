/**
 * Created by luwen on 2017/6/19.
 */
function Login(){

    $.ajax({
        type:'get',
        url:"http://www.chinadxr.cn:3000/users/User",
         cache:false,
        data:{
             phone:$("#name").val(),
             password:$("#password").val()
          },
        timeout:5000,
        crossDomain:true,
        datatype:'jsonp',
        success:function(data,testStatus) {
             console.log(data)
            if (data.state == '1') {
                 window.location.replace("homepage.html");
                localStorage.setItem("phonenumber",$("#name").val());

            } else if (data.state== '0') {
                alert("用户名，密码错误，请重新输入");
            } else if(data.state=='2'){
                alert("用户名不存在，请注册后使用");
            }else{
                alert("用户状态异常")
            }


    },
        error:function(){
            alert("网络超时");
        }
    });

}


function forgetPass(){
    alert("请联系管理员：123456789");
}