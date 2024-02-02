
clock =document.getElementById('clock');
classdemo=document.getElementsByClassName('clock-container');

setInterval(()=>{
    var date= new Date();
    var formatetime=date.toLocaleString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'numeric',second:'numeric'});
    clock.textContent=formatetime;

},1000)
