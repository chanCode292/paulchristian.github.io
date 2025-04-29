function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("sum").innerHTML = "Please enter valid number.";
        return;
    }
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
    const modulo = num1 % num2;

    const resultText =
    "The sum is: " + sum + "<br>" +
    "The difference is: " + difference + "<br>" +
    "The product is: " + product + "<br>" +
    "The quotient is: " + quotient + "<br>" +
    "The modulo is: " + modulo;

    document.getElementById("sum").innerHTML = resultText;
}

function clearFields(){
    document.getElementById("sum").innerHTML=" ";

}
