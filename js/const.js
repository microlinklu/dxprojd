var pic=[];
var news=[];
var str = '12345';
var userVip=[];
var task=[];
var shop=[];
$(function(){
    $.ajax({
        url:'http://www.chinadxr.cn:3000/users/getIndex',
        type:'get',
        dataType:'jsonp',
        beforeSend:function(){},
        success:function(msg){
            console.log(msg);
            pic=msg.Pic; console.log(pic);
            news=msg.News;console.log(news);
            userVip=msg.userVip;console.log(userVip);
            task=msg.Task;console.log(task);
            shop=msg.shop;console.log(shop);
        },
        complete:function(){

        },
        error:function(msg){
            console.log(msg);
        }

    })
})