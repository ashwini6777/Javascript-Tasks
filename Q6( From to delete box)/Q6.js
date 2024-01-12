var box=document.getElementsByClassName('box');
// console.log(box);
var btn=document.getElementById('btn');
var arr=[...box];
// console.log(arr.length);
var del=document.getElementById('deletedata');
function delBox(){
    var start=parseInt(document.getElementById('start').value);
    var end=parseInt(document.getElementById('end').value);
    if (start<=0 || end<=0 ||start>10 || end>10 || start>end)
    {
        alert("Invalid input please enter valid Number");
        btn.disabled=true;
    }
    var deletedbox=arr.slice(start -1,end);
     deletedbox.forEach(box => box.remove());
     var deletedBoxContents=deletedbox.map(box=> box.textContent);
     del.innerHTML=`<h1>Deleted Boxes: </h1>` + deletedBoxContents.map(element=>`<div class
     ="deletebox "><h1>${element}</h1></div>`).join(' ');
}