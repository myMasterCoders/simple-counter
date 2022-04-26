
let plus=document.querySelector("#plus");
let sub=document.querySelector("#sub");
let num=document.querySelector(".num");
let counter=0;

plus.addEventListener("click",(e)=>{
    counter++;
    num.innerHTML=counter;
    if(counter>10)
        num.style.color="green"
})
sub.addEventListener("click",(e)=>{
    counter--;
    num.innerHTML=counter;
     if(counter<=10)
      num.style.color="red"
})