
$(function(){
    $.ajax({
        url:'http://www.chinadxr.cn:3000/users/getIndex',
        type:'get',
        dataType:'jsonp',
        cache:false,
        beforeSend:function(){},
        success:function(msg){

            if(typeof(Storage)!=="undefined"){
                localStorage.setItem("yy",JSON.stringify(msg));
                var data=JSON.parse(localStorage.getItem("yy"));


            }
            else{
                alert("浏览器不支持本地存储！");
            }
            for(var i=data.Pic.length-1;i>0;i--){
                if(data.Pic[i].type==0)
                {

                    var li=document.createElement("li");
                    var img=document.createElement("img");
                    var str="http://www.chinadxr.cn:3000"+data.Pic[i].path.substring(8);
                    img.setAttribute("src",str);
                    img.setAttribute("width","600em");
                    img.setAttribute("height","172em");
                    li.appendChild(img);
                    $("#lbBox .pic ul").append(li);
                }
            }
            for(var j=4;j>0;j--){
                var str1="http://www.chinadxr.cn:3000"+data.News[j].picPath.substring(8);
                var li1=document.createElement("li");
                var div1=document.createElement("div");
                div1.setAttribute("class","title");
                var div2=document.createElement("div");
                div2.setAttribute("class","img");
                var div3=document.createElement("div");
                div3.setAttribute("class","title1");
                var div4=document.createElement("div");
                div4.setAttribute("class","information");
                var img1=document.createElement("img");
                img1.setAttribute("src",str1);
                var a=document.createElement("a");
                var a1=document.createElement("a");
                a1.setAttribute("href","news_details.html?"+j);
                var a2=document.createElement("a");
                a2.setAttribute("href","news_details.html?"+j);
                var h3=document.createElement("h3");
                var p=document.createElement("p");
                a2.appendChild(li1);
                li1.appendChild(div1);
                div1.appendChild(div2);
                div1.appendChild(div3);
                div1.appendChild(div4);
                div2.appendChild(img1);
                div3.appendChild(a);
                div3.appendChild(p);
                div4.appendChild(a1);
                a.appendChild(h3);
                h3.innerHTML=data.News[j].title;
                p.innerHTML=data.News[j].content;
                a1.innerHTML="详情&gt;";
                $("#box3 ul").append(a2);
            }

            for(var s=data.shop.length-1;s>data.shop.length-10;s--){
                var str2="http://www.chinadxr.cn:3000"+data.shop[s].pic_path.substring(8);
                var li2=document.createElement("li");
                var div5=document.createElement("div");
                div5.setAttribute("class","shop_img");
                var div6=document.createElement("div");
                div6.setAttribute("class","img_a");
                var div7=document.createElement("div");
                div7.setAttribute("class","text");
                var img2=document.createElement("img");
                img2.setAttribute("src",str2);
                var a=document.createElement("a");
                var p=document.createElement("p");
                var p1=document.createElement("p");
                var p2=document.createElement("p");
                var br=document.createElement("br");
                li2.appendChild(div5);
                div5.appendChild(div6);
                div5.appendChild(div7);
                div6.appendChild(a);
                a.appendChild(img2);
                div7.appendChild(p);
                div7.appendChild(br);
                div7.appendChild(p1);
                div7.appendChild(br);
                div7.appendChild(p2);
                p.innerHTML="产品名称:"+data.shop[s].title;
                p1.innerHTML="需用积分:"+data.shop[s].integral;
                p2.innerHTML="需用公分:"+data.shop[s].price;
                $("#box4 ul").append(li2);
            }

        },
        complete:function(){
            myFocus.set({
                id:'lbBox'}
            )
        },
        error:function(msg){

        }

    })
})