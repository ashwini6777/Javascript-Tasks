var box=document.getElementsByClassName('box');
var arr=[...box];
// console.log(box);
var count=1;
function Changecolor(color){
    if(count==1){
        arr[0].style.backgroundColor=color;
        count=count+1;
    }
    else if(count==2){
        arr[1].style.backgroundColor=color;
        count=count+1;
    }
    else if(count==3){
        arr[2].style.backgroundColor=color;
        count=count+1;
    }
    else if(count==4){
        arr[3].style.backgroundColor=color;
        count=count+1;
    }
    else if(count==5){
        arr[4].style.backgroundColor=color;
        count=1;
    }

  
}

