/**
 * Created by luwen on 2017/6/26.
 */
//点赞关注任务列表，从taskphone中检索出对应phone的id用列表显示
function taskList(type){
    if(type=='good'){
        $("#type").text('点赞过');
        $("#mask").css('display','block');
    }else if(type=='care'){
        $("#type").text('关注过');
        $("#mask").css('display','block');
    }else if(type=='accept'){
        $("#mask1").css('display','block');
        $("#bt1").css('background','#FC6')
        $("#bt2").css('background','#DDD')

    }else if(type=='publish'){

        $("#bt2").css('background','#FC6')
        $("#bt1").css('background','#DDD')
    }


    $.ajax({
        url:"http://localhost:3000/users/hottask",
        datatype:'jsonp',
        type:'get',
        cache:false,
        data:{
            phone:localStorage.getItem('phonenumber'),
            type:type
        },
        success:function(data){
           var ol=document.getElementById("acctaskol");
            console.log(data);
            for(var i=0;i<data.length;i++){
                var li=document.createElement('li');
                if(type=='accept'){
                    li.setAttribute("onclick","taskDetail("+i+","+data[i]+")")
                }else if(type=='publish'){
                    li.setAttribute("onclick","publishDetail("+i+","+data[i]+")")
                }
                   var table=document.createElement('table');
                   var tr1=document.createElement('tr');
                     var td11=document.createElement('td');
                          td11.textContent='任务标题：'
                var td12=document.createElement('td');
                td12.textContent=data[i].title;
                tr1.appendChild(td11);
                tr1.appendChild(td12);
                var tr2=document.createElement('tr');
                var td21=document.createElement('td');
                td21.textContent='任务内容：'
                var td22=document.createElement('td');
                td22.textContent=data[i].content;
                tr2.appendChild(td21);
                tr2.appendChild(td22);
                table.appendChild(tr1);
                table.appendChild(tr2);
                li.appendChild(table);
                var hr=document.createElement('hr');
                hr.setAttribute('width','90%');
                li.appendChild(hr);
                 ol.appendChild(li);

            }
        }
    });
}
window.onload=function(){
    $.ajax({
        url:"http://localhost:3000/users/getMyInfo",
        datatype:'jsonp',
        data:{
            phone:localStorage.getItem("phonenumber")
            },
        cache:false,
        type:'get',
        success:function(data){console.log(data)
            $("#name").text(data.data[0].name);
        }
    });
}
function hide(){
    $("#mask").css("display","none");
}
function hide1(){
    $("#mask1").css("display","none");
}
function backtaskplan(){
    $("#task_plan").css("display","none");
}
function backatask(){
    $("#atask").css("display","none");
}
//任务明细
function taskDetail(i,task){
    $("#task_plan").css('display','block');
    $("#taskplan_title").text(task[i].title);
    $("#taskplan_points").text(task[i].points);
    $("#taskplan_initor").text(task[i].initiator);
    $("#taskplan_createdate").text(task[i].createtime);
    $("#bttpsub").onclick=getPhoto(task[i].id);

}
//任务完成上传图片数据
function compsubmit(id,imgdata){
var filename=imgdata.substring(imgdata.lastIndexOf('/')+1);
    $.ajax({
        url:"http://localhost:3000/users/completeTask",
        data:{
            id:id,
            picname:filename,
               },
        datatype:'jsonp',
        type:'post',
        success:function(data){
            alert("任务完成")
        }
    });
    //上传图片
    var deferred  = when.defer(),
        options = new FileUploadOptions();
    options.fileKey = "file",
        options.fileName = filename;
    options.mimeType = "image/jpeg";

    var ft = new FileTransfer();
    // 上传回调
    ft.onprogress = showUploadingProgress;
    navigator.notification.progressStart("", "当前上传进度");
    ft.upload( imageURI, encodeURI('http://www.chinadxr.cn:3000/uploads'), function(){
        deferred.resolve( imageURI );
        navigator.notification.progressStop();
    } , null, options);
}
//任务完成确认 iscomplete=2上传用户phone，
function confirmTask(id){
    $.ajax({
        url:"http://localhost:3000/users/confirmTask",
        datatype:'jsonp',
        type:'post',
        data:{
            id:id
        },
        success:function(data){
            alert("任务完成确认成功")
        }
    });

}
//已发布任务详情
var app=angular.module("app",[]);
//任务完成详情确认
function publishDetail(i,task){
$("#atask").css('display','block')

    app.controller("task",function($scope){
        $scope.title=task[i].title;
        $scope.completetime=task[i].completetime;
        if(task[i].iscomplete){
            $scope.complete="完成";
        }else{
            $scope.complete="未完成";
        }

    })
    $.ajax({
        url:"http://www.chinadxr.cn:3000/getCompletePic",
        data:{
            phone:localStorage.getItem("phonenumber"),
                id:task[i].id
        },
        success:function(data){
            $("#ataskimg").attr('src','http://www.chinadxr.cn:3000/task[i].imgdata')
        }
    });

    $("#failure").on('click',confirmTask(task[i].id));
}
//任务完成拍照
function getPhoto(id){
   //获取图片后调用compsubmit(id,imgdata)
document.addEventListener('ondeviceready',onDeviceready,false);
    function onDeviceready(){
        navigator.camera.getPicture(onSuccess,onError,{quality : 80,
            destinationType : destinationType.FILE_URI,//这里要用FILE_URI，才会返回文件的URI地址
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType : Camera.EncodingType.JPEG,
            targetWidth : $("#taskplan_finish").width(),
            targetHeight : $("#taskplan_finish").height(),
            saveToPhotoAlbum : true});
        function onSuccess(imgURI){
            $("#taskplan_finish").attr('src','imgURI');
            compsubmit(id,imgURI)
        }
    }
}