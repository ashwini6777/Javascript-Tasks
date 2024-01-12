var btn=document.getElementsByClassName('box');
var arr=[...btn]
arr.map((element,index)=>{
    // console.log(index);
    element.addEventListener("click",()=>{
        if(element.style.backgroundColor=='black')
        {
            element.style.backgroundColor='white';
        }
        else
        {
            element.style.backgroundColor='black';
        }
    })
})