/**
 * Created by luwen on 2017/6/23.
 */
function searchTask(){
  var task=$("#seek")[0].value;

}
function submitTask(){
    //title,content,address,points,lonitude,latitude
   var title=$("#sponsor")[0].value;
   var sheng=$("#province")[0].options[$("#province")[0].selectedIndex].text;

    var shi=$("#city")[0].options[$("#province")[0].selectedIndex].text;
    var address=sheng+shi+$(".addr")[0].innerHTML.trim();
    var content=$(".minute")[0].innerHTML.trim();
    var time=new Date().toLocaleDateString();
    var points=$("#award")[0].value;
    if(title==''||title.length==0){
        alert("标题不允许为空");
        return;
    }

    var point =new BMap.Point();
    var myGeo=new BMap.Geocoder();
    myGeo.getPoint(address,function(point){
        if(point){
          var  longitude=point.lng;
          var  latitude=point.lat;
            $.ajax({
                url:"http://localhost:3000/users/addTask",
                type:"post",
                data:{
                    title:title,
                    content:content,
                    address:address,
                    points:points,
                    longitude:longitude,
                    latitude:latitude,
                    createtime:time,
                    initiator:localStorage.getItem("phonenumber")
                },

                datatype:"jsonp",
                beforeSend:function(xhr){console.log(222)

                },
                success:function(data){
                    if(data.res==1){
                        alert("任务添加成功")
                    }else{
                        alert("任务添加失败")
                    }
                }
            });
        }else{
          alert("地址有误")
        }
    },shi)

}
