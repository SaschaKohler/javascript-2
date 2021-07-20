
function getCalc() {
    let array = ['+', '-'];
    let var1 = Math.floor(Math.random() * 10 + 1);
    let var2 = Math.floor(Math.random() * 10 + 1);
    let var3 = Math.floor(Math.random() * 2);
    let result = eval(var1 + array[var3] + var2);
   
    result = eval(result);

    

    let eingabe = Number(prompt("Please solve " + var1 + " " + array[var3] + " " + var2 + " = " + result ));
    

    if (eingabe === result) {
        alert("Super, Alle drei aufgaben richtig gelöst wir schliessen die Sitzung");
        window.close();
    }
    else {
        alert("wrongiwrong");
    }

}


btn.onclick = getCalc;
