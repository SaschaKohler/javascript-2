

function click(){
    canvi[0].innerHTML= "onmouseclick";
}
function mdown(){
    canvi[0].innerHTML= "onmouseDown";
    
}
function mup(){
    canvi[0].innerHTML= "onmouseUp";
}
function background(){
    let li = event.target.closest('ul');
    li.style.background = 'blue';
    li.style.color= 'white';
    event.stopPropagation();
}

let canvi = document.getElementsByTagName("footer");

btn.onclick = click;
btn.onmousedown = mdown;
btn.onmouseup = mup;

footerNav.onclick = background;




