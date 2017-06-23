/**
 * Created by luwen on 2017/6/23.
 */
function searchTask(){

}
function submitTask(){
    //title,content,address,points,lonitude,latitude
   var title=$("#sponsor")[0].value;
   var sheng=$("#province")[0].options[$("#province")[0].selectedIndex].text;

    var shi=$("#city")[0].options[$("#province")[0].selectedIndex].text;
    var content=$(".minute")[0].innerHTML.trim();
    var address=sheng+shi;
    var points=$("#award")[0].value;

    var longitude;
    var latitude;
    if(title==''||title.legth==0){
        alert("标题不允许为空");
        return;
    }
    var point =new BMap.Point();
    var myGeo=new BMap.Geocoder();

    myGeo.getPoint(address,function(point){
        if(point){
           longitude=point.lng;
            latitude=point.lat;
        }else{
            return null;
        }
    },shi)

    $.ajax({
        url:"http://localhost:3000/users/addTask",
        type:"post",
        data:{
            title:title,
            content:content,
            address:address,
            points:points,
            longitude:longitude,
            latitude:latitude
        },
        datatype:"jsonp",
        success:function(data){
            if(data.res==1){
                alert("任务添加成功")
            }else{
                alert("任务添加失败")
            }
        }
    });
}
