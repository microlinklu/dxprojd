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
        url:'http://localhost:3000/users/zhuce',
        datatype:'jsonp',
        crossDomain:'true',
        data:{
            phone:ph,
            password:pass
        },

        complete:function(xhr,text){

    }
    }
    );

}