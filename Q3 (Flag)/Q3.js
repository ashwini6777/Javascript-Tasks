var box=document.getElementsByClassName('box');
var arr=[...box];
var count=1;
arr.map((element,index)=>{
    element.addEventListener("click",()=>{
        // console.log(index);
        if(count==1)
        {
            element.style.backgroundColor="orange";
            count=count+1;
        }
        else if(count==2)
        {
            element.style.backgroundColor="white";
            count=count+1;
        }
        else
        {
            element.style.backgroundColor="green";
            count=1;
        }

    })

})