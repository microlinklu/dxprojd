/**
 * Created by luwen on 2017/6/19.
 */
function Login(){
    console.log($("#name").val());
    console.log($("#password").val());
    $.ajax("http://localhost:3000/users/login",{
        username1:$("#name").val(),
        password1:$("#password").val()
    },function(data,testStatus) {

            if (data.state == 1) {
          window.location.href="homepage.html";
            } else if (data.state == 0) {
                alert("用户名，密码错误，请重新输入");
            } else {
                alert("用户状态异常，请联系管理员解决");
            }

    },'json');
}