/**
 * Created by luwen on 2017/6/22.
 */
function regist(){
    var ph=$("#phone").val();
    var pass=$("#password").val();
    if(ph==''||ph.length!=11){
        alert("手机号不符合要求");
        return;
    }
    if(pass==''){
        alert("密码不能为空")
        return;
    }
    $.ajax({
        type:'post',
        url:'http://www.chinadxr.cn:3000/users/zhuce',
        datatype:'jsonp',

        data:{
            phone:ph,
            password:pass
        },

        success:function(data){
              if(data.res==1){
                  alert('注册成功');
                  window.location.replace("Login.html")
              }else if(data.res==0){
                  alert('注册失败')
              }else{
                  alert('该手机号已经注册过')
              }
    }
    }
    );

}