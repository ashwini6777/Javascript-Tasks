var time=document.getElementById('time');
var screen=document.getElementById('screen');
var pic=document.getElementById('pic');
function show(){
    screen.innerText=".......Happy new year.......";
    pic.style.backgroundImage="url('https://images3.alphacoders.com/666/thumb-1920-666049.jpg')"
}
    
setInterval(()=>{
    const date=new Date();
    cdate=date.toLocaleTimeString();
    // console.log(cdate);
    time.innerHTML=`<h1>${cdate}</h1>`
    if(date.getHours()==0 && date.getMinutes()==12 && date.getSeconds()==30)
    {
        // alert("Happy new year");
        show();
        
    }
    
},1000)


