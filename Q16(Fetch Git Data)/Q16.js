var url="https://api.github.com/users/ashwini6777";
// console.log(url);
var demo1=document.getElementById('demo1');

var demo2=document.getElementById('demo2');
var demo3=document.getElementById('demo3');
var demo4=document.getElementById('demo4');
var demo5=document.getElementById('demo5');
var demo6=document.getElementById('demo6');

async function fun(){

    var resp=await fetch(url);
    var res=await resp.json();
    console.log(res);
    demo1.innerText="URL   :" + res.url;
    demo2.innerText="LOGIN   :" + res.login;
    demo3.innerText="ID   :" + res.id;
    demo4.innerText="NAME   :" + res.name;
    demo5.innerText="FOLLOWERS   :"+ res.followers;
    demo6.innerText="FOLLOWING   :"+ res.following;
}
fun()
