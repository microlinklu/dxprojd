/**
 * Created by luwen on 2017/6/21.
 */
var point=0;

function getPoint1(index){
    $ ("#total").val(0);
    $("#number").val(0);
    switch(index) {
        case 1:
            point = 100;
            $("#a").css("backgroundColor", "#ccc");
            $("#b").css("backgroundColor", "#fff");
            $("#c").css("backgroundColor", "#fff");
            $("#d").css("backgroundColor", "#fff");
            $("#e").css("backgroundColor", "#fff");
            $("#f").css("backgroundColor", "#fff");
            break;
        case 2:
            $("#a").css("backgroundColor","#fff");
            $("#b").css("backgroundColor","#ccc");
            $("#c").css("backgroundColor","#fff");
            $("#d").css("backgroundColor","#fff");
            $("#e").css("backgroundColor","#fff");
            $("#f").css("backgroundColor","#fff");
            point=300;
            break;
        case 3:
            $("#a").css("backgroundColor","#fff");
            $("#b").css("backgroundColor","#fff");
            $("#c").css("backgroundColor","#ccc");
            $("#d").css("backgroundColor","#fff");
            $("#e").css("backgroundColor","#fff");
            $("#f").css("backgroundColor","#fff");
            point=500;
            break;
        case 4:
            $("#a").css("backgroundColor","#fff");
            $("#b").css("backgroundColor","#fff");
            $("#c").css("backgroundColor","#fff");
            $("#d").css("backgroundColor","#ccc");
            $("#e").css("backgroundColor","#fff");
            $("#f").css("backgroundColor","#fff");
            point=1000;
            break;
        case 5:
            $("#a").css("backgroundColor","#fff");
            $("#b").css("backgroundColor","#fff");
            $("#c").css("backgroundColor","#fff");
            $("#d").css("backgroundColor","#fff");
            $("#e").css("backgroundColor","#ccc");
            $("#f").css("backgroundColor","#fff");
            point=5000;
            break;
        case 6:
            $("#a").css("backgroundColor","#fff");
            $("#b").css("backgroundColor","#fff");
            $("#c").css("backgroundColor","#fff");
            $("#d").css("backgroundColor","#fff");
            $("#e").css("backgroundColor","#fff");
            $("#f").css("backgroundColor","#ccc");
            point=10000;
            break;
    }
}
//function getPoint2(){
//    $("#total").val(0)
//    $("#number").val(0);
//    $("#a").css("backgroundColor","#fff");
//    $("#b").css("backgroundColor","#ccc");
//    $("#c").css("backgroundColor","#fff");
//    $("#d").css("backgroundColor","#fff");
//    $("#e").css("backgroundColor","#fff");
//    $("#f").css("backgroundColor","#fff");
//    point=300;
//
//}
/*
function getPoint3(){
    $("#total").val(0)
    $("#number").val(0);
    $("#a").css("backgroundColor","#fff");
    $("#b").css("backgroundColor","#fff");
    $("#c").css("backgroundColor","#ccc");
    $("#d").css("backgroundColor","#fff");
    $("#e").css("backgroundColor","#fff");
    $("#f").css("backgroundColor","#fff");
    point=500;

}function getPoint4(){
    $("#total").val(0)
    $("#number").val(0);
    $("#a").css("backgroundColor","#fff");
    $("#b").css("backgroundColor","#fff");
    $("#c").css("backgroundColor","#fff");
    $("#d").css("backgroundColor","#ccc");
    $("#e").css("backgroundColor","#fff");
    $("#f").css("backgroundColor","#fff");
    point=1000;

}function getPoint5(){
    $("#total").val(0)
    $("#number").val(0);
    $("#a").css("backgroundColor","#fff");
    $("#b").css("backgroundColor","#fff");
    $("#c").css("backgroundColor","#fff");
    $("#d").css("backgroundColor","#fff");
    $("#e").css("backgroundColor","#ccc");
    $("#f").css("backgroundColor","#fff");
    point=5000;

}function getPoint6(){
    $("#total").val(0)
    $("#number").val(0);
    $("#a").css("backgroundColor","#fff");
    $("#b").css("backgroundColor","#fff");
    $("#c").css("backgroundColor","#fff");
    $("#d").css("backgroundColor","#fff");
    $("#e").css("backgroundColor","#fff");
    $("#f").css("backgroundColor","#ccc");
    point=10000;

}
*/
function total() {

    $("#total").val($("#number").val() * point);
}
function subAcount(channel){
  if(channel==''){
     alert("充值功能暂未开放");
      return;
  }
    var   cash=$("#total").val();

    var YOUR_URL = 'http://localhost:3000';


        if(YOUR_URL.length == 0 || !YOUR_URL.startsWith('http')){
            alert("请填写正确的URL");
            return;
        }
        console.log(cash)

        var xhr = new XMLHttpRequest();
        xhr.open("POST", YOUR_URL, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({
            channel: channel,
            amount: cash
        }));

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                pingpp.createPayment(xhr.responseText, function(result, err) {
                    console.log(result);
                    console.log(err.msg);
                    console.log(err.extra);
                });
            }
        }

}
