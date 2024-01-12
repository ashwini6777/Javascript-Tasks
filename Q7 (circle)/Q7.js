var circle=document.getElementsByClassName('circle');
// console.log(circle);
var deldata=document.getElementById('deleteData');
var arr=[...circle];
// console.log(arr);
var darr=[];
arr.map((element,index)=>{
    
    element.addEventListener("click",()=>{
        // console.log(element,index);
        element.remove();
        darr.push(element.textContent);
        deldata.innerHTML='' +darr.map(element=>`<div class="deleteCircle">${element}</div>`).join('');

    })
})