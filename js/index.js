
function getCalc() {
    let array = ['+', '-'];
    let var1 = Math.floor(Math.random() * 10 + 1);
    let var2 = Math.floor(Math.random() * 10 + 1);
    let var3 = Math.floor(Math.random() * 2);
    let result = eval(var1 + array[var3] + var2);
   
    result = eval(result);

    console.log(typeof (var1));
    console.log(typeof (var2));
    console.log(typeof (var3));
    console.log('result ' + result);
    console.log(typeof (result));


    let eingabe = Number(prompt("Please solve " + var1 + " " + array[var3] + " " + var2 + " = " + result ));
    

    if (eingabe === result) {
        alert("rightiright");
        
        window.open('index2.html');
    }
    else {
        alert("wrongiwrong");
    }

}


btn.onclick = getCalc;
