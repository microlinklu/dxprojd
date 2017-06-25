/**
 * Created by luwen on 2017/6/24.
 */
function taskList(){
   // var contain=document.getElementById('task');
   // var item=document.createElement('div')
   // item.setAttribute('height','0.5rem');
   // var item1=document.createElement('div');
   // item1.setAttribute('width','4rem');
   // var addrText=document.createElement('label');
   // addrText.setAttribute('value','详细地址');
   // var addr=document.createElement('input');
   // addr.setIdAttribute='add';
   // addr.setAttribute('width','3rem');
   //
   // var taskCont=document.createElement('label');
   // taskCont.setAttribute('value','详细地址');
   // item1.appendChild(addrText);
   //// item1.appendChild(addr);
   // var item2=document.createElement('div');
   // item1.setAttribute('width','2rem');
   // item.appendChild(item1);
   // item.appendChild(item2);
   // console.log(222222)
   // contain.appendChild(item);
    for(var i=0;i<10;i++)
   addUL();

}
function addUL(){
    var par=document.getElementById('task');
    var ul=document.createElement('ul');
    ul.setIdAttribute='taskList';
    par.appendChild(ul)
    addLi(ul)
}
function addLi(parent){
    var item=document.createElement('li');
    var hr=document.createElement('hr');
    addTable(item);
    item.appendChild(hr);
    parent.appendChild(item);

}
function addTable(parent){
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
    addr.setIdAttribute='addr';
    td12.appendChild(addr);
   var td13=document.createElement('td');
    var point=document.createElement('label');
         point.setAttribute('textsize','0.8rem')
   point.textContent='公分：';

    //var bt2=document.createElement('button');
    //bt2.textContent='忽略任务';
    td13.appendChild(point);
    //td13.appendChild(bt2);
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
    td22.appendChild(addr);
    var td23=document.createElement('td');
    var bt1=document.createElement('button');
    bt1.setAttribute('width','0.5rem');
    bt1.textContent='接受任务';
    var bt2=document.createElement('button');
    bt2.textContent='忽略任务';
    td23.appendChild(bt1);
    td23.appendChild(bt2);
    tr2.appendChild(td21);
    tr2.appendChild(td22);
    tr2.appendChild(td23);
    table.appendChild(tr2);
    parent.appendChild(table);
}