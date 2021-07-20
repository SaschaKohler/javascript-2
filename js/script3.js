
let boolean = false;

function strongTag() {
    if (!boolean) {
        this.style.background = 'green';
        boolean = true;
    } else if (boolean) {
        this.style.background = 'yellow';
        boolean = false;
        event.stopPropagation();

    }


}
function identTag() {
    if (!boolean) {
        this.style.background = 'green';
        boolean = true;
    } else if (boolean) {
        this.style.background = 'yellow';
        boolean = false;
        event.stopPropagation();
    }
}

function emTag() {
    if (!boolean) {
        this.style.background = 'green';
        boolean = true;
    } else if (boolean) {
        this.style.background = 'yellow';
        boolean = false;
        event.stopPropagation();
    }
}



function pTag() {
    if (!boolean) {
        this.style.background = 'green';
        boolean = true;
    } else if (boolean) {
        this.style.background = 'yellow';
        boolean = false;
        event.stopPropagation();
    }
}

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
function redTd () {

    let td = event.target.closest('td');
    td.style.background = 'red';

}

strong.onclick = strongTag;

i.onclick = identTag;

em.onclick = emTag;

p.onclick = pTag;

let canvi = document.getElementsByTagName("footer");

btn.onclick = click;
btn.onmousedown = mdown;
btn.onmouseup = mup;

footerNav.onclick = background;



tableBody.onclick = redTd;