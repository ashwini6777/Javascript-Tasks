var rand=document.getElementById('randnum');
function Click(){
    var num=Math.floor(Math.random()*100)
    console.log(num);
    rand.innerText=num;

}