var box=document.getElementsByClassName('box');
// console.log('box');
var arr=[...box];
arr.map((element,index)=>{
    element.addEventListener("click",()=>{
        element.remove();

    })
})