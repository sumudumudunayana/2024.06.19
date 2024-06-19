function calc1(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 =Number(document.getElementById("num2").value);
    let lblOutput = document.getElementById("output");

    let add = number1+number2;

    lblOutput.innerHTML=add;

}

function calc2(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 =Number(document.getElementById("num2").value);
    let lblOutput = document.getElementById("output");

    let multi = number1*number2;

    lblOutput.innerHTML=multi;

}

function calc3(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 =Number(document.getElementById("num2").value);
    let lblOutput = document.getElementById("output");

    let div = number1/number2;

    lblOutput.innerHTML=div;

}


function calc4(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 =Number(document.getElementById("num2").value);
    let lblOutput = document.getElementById("output");

    let sub = number1-number2;

    lblOutput.innerHTML=sub;

}

