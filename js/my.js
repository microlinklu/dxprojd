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
        $("#acctaskol").removeAll;
    }else if(type=='complete'){
      console.log(234)

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
                if(type=='accept'||type=='complete'){
                    li.setAttribute("onclick","taskDetail("+i+","+data[i]+")")
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
function hide2(){
    $("#mask2").css("display","none");
}
function taskDetail(i,task){
  $("#comptitle").text(task[i].title);
    $("#points").text(task[i].points);
    $("#createper").text(task[i].initiator);
    $("#time").text(task[i].createtime);
   $("#compbutton").onclick=compsubmit(task[i].id);

}
function compsubmit(id){
    $.ajax({
        url:"http://localhost:3000/users/completeTask",
        data:{
            id:id,
            picname:filename
        },
        datatype:'jsonp',
        type:'post',
        success:function(data){
            alert("任务完成")
        }
    })
}