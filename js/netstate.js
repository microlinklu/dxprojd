/**
 * Created by luwen on 2017/6/19.
 */
//检测网络状态，没有网络连接直接跳回封面
function netConnectState(){
     if(!navigator.onLine){
        alert("网络连接异常，请稍后再试");
       window.location.href="welcome.html";
    }
}
window.onload=netConnectState();