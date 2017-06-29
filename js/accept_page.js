/**
 * Created by luwen on 2017/6/24.
 */
var task;
function taskList(){

    $.ajax({
        url:"http://localhost:3000/users/getTask",
        success:function(data) {
            task=data.data;
        },
        cache:false,
        datatype:'jsonp',
        data:{
            phone:localStorage.getItem("phonenumber")
        },
        complete:function(){

            for (var i = 0; i < task.length; i++) {
                addUL(task[i],i);
            }
        }
    })
}
function addUL(obj,index){
    var par=document.getElementById('task');
    var ul=document.createElement('ul');
    ul.setIdAttribute='taskList';
    par.appendChild(ul)
    addLi(ul,obj,index)
}
function addLi(parent,obj,index){
    var item=document.createElement('li');
    var hr=document.createElement('hr');
    addTable(item,obj,index);
    item.appendChild(hr);
    parent.appendChild(item);

}
function addTable(parent,obj,index){
    var table=document.createElement('table');
    var tr1=document.createElement('tr');
    tr1.setAttribute('height','0.4rem');
    var td11=document.createElement('td');
    td11.setAttribute('width','20%');
       var txtAddr=document.createElement('label');
    txtAddr.textContent='详细地址：';
    td11.appendChild(txtAddr);
    var td12=document.createElement('td');
    td12.setAttribute('width','55%');
    var addr=document.createElement('input');
    addr.setAttribute('disabled','disabled');
    addr.setAttribute('style','width:80%');
    addr.value=obj.address;
    td12.appendChild(addr);
   var td13=document.createElement('td');
    var point=document.createElement('label');
         point.setAttribute('textsize','0.8rem')
         point.textContent='公分：'+obj.points;
    td13.appendChild(point);
    tr1.appendChild(td11);
    tr1.appendChild(td12);
    tr1.appendChild(td13);
    table.appendChild(tr1);
    var tr2=document.createElement('tr');
    tr2.setAttribute('height','0.8rem');
    var td21=document.createElement('td');
    td21.setAttribute('width','20%');
    var txtAddr=document.createElement('label');
    txtAddr.textContent='任务内容：';
    td21.appendChild(txtAddr);
    var td22=document.createElement('td');
    td22.setAttribute('width','55%');
    var addr=document.createElement('input');
    addr.setAttribute('disabled','disabled');
    addr.setAttribute('style','width:80%;height:0.6rem');
    addr.setIdAttribute='addr';
    addr.value=obj.content;
    td22.appendChild(addr);
    var td23=document.createElement('td');
    var bt1=document.createElement('button');
    bt1.setAttribute('width','0.5rem');
    bt1.textContent='接受任务';
    bt1.setAttribute('onclick','taskContent('+index+')');
    var bt2=document.createElement('button');
    bt2.textContent='忽略任务';
    bt2.setAttribute('onclick','abortTask('+obj.id+')');
    td23.appendChild(bt1);
    td23.appendChild(bt2);
    tr2.appendChild(td21);
    tr2.appendChild(td22);
    tr2.appendChild(td23);
    table.appendChild(tr2);
    parent.appendChild(table);
}
function taskContent(index) {
    $("#taskmask").css('display', 'block');
     $("#title").text(task[index].title);
    $("#creatId").text(task[index].initiator);
    $("#createtime").text(task[index].createtime);
    $("#content").text(task[index].content);
    $("#points").text(task[index].points);
    $("#address").text(task[index].address);
    $("#btaccept").onclick=acceptTask(index);
    $("#btcare").onclick=careTask(index);
    $("#btgood").onclick=goodTask(index);
    var map = new BMap.Map("allmap");
    var new_point = new BMap.Point(task[index].longitude, task[index].latitude);
    map.centerAndZoom(new_point, 11);
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(new_point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中

}

function back(){
    $("#taskmask").css('display','none');
    window.location.href="accept_page.html";
}
function acceptTask(id){
    var phone=localStorage.getItem('phonenumber').trim();
    $.ajax({
        url:"http://localhost:3000/users/acceptTask",
        datatype:'jsonp',
        data:{
            phone:phone,
            id:id
        },
        type:'post',
        crossDomain:'true',
        success:function(data){console.log(data);
            if(data.res==1){
                alert('任务接受成功')
            }else{
                alert('任务接受失败')
            }
        }
    })
}
function abortTask(id){
    var phone=localStorage.getItem('phonenumber').trim();
    $.ajax({
        url:"http://localhost:3000/users/acceptTask",
        datatype:'jsonp',
        data:{
            phone:phone,
            id:id,
            igon:1
        },
        type:'post',
        crossDomain:'true',
        success:function(data){console.log(data);
            if(data.res==1){
                alert('任务忽略成功')
            }else{
                alert('任务忽略失败')
            }
        }
    })
}
function careTask(id){
    $.ajax({
        url:"http://localhost:3000/users/care",
        data:{
            id:id,
            phone:pohne
        },
        datatype:'jsonp',
        type:'post',
        success:function(){

        }
    })
}
function goodTask(id){
    $.ajax({
        url:"http://localhost:3000/users/good",
        data:{
            id:id,
            phone:pohne
        },
        datatype:'jsonp',
        type:'post',
        success:function(){

        }
    })
}