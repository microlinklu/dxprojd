/**
 * Created by luwen on 2017/6/26.
 */
function safeSetup(){
    var name=$("#name").val()
    var pass=$("#password").val()
    var email=$("#email").val()
    var phone=localStorage.getItem("phonenumber")
    $.ajax({
        url:"http://www.chinadxr.cn:3000/users/safesetup",
        type:'post',
        datatype:'jsonp',
        data:{
            name:name,
            pass:pass,
            email:email,
            phone:phone
        },

        success:function(){
         window.location.replace('my.html')
        }
    })
}