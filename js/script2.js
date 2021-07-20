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

strong.onclick = strongTag;

i.onclick = identTag;

em.onclick = emTag;

p.onclick = pTag;