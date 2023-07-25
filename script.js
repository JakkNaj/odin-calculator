let firstNumSelected = false;
let firstNum = "";
let operator = "";
let secondNum = "";

let display = document.getElementById("display");
let clearBtn = document.getElementById("ac");
let plusMinusBtn = document.getElementById("plus-minus");
let percentBtn = document.getElementById("percent");
let numbers = document.querySelectorAll(".number");
let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiply");
let division = document.getElementById("division");
let equals = document.getElementById("equals");

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function divide(x, y){
    return x / y;
}
function multiply(x, y){
    return x * y;
}

function operate(operator, x, y) {
    switch (operator){
        case '+': return add(x,y);
        case '-': return subtract(x,y);
        case '*': return multiply(x,y);
        case '/': return divide(x,y);
    }
}

function showToDisplay(output){
    display.textContent = output;
}


clearBtn.addEventListener("click", () => {
    display.textContent = "";
    firstNumSelected = false;
    firstNum = "";
    operator = "";
    secondNum = "";
})

//give event listeners to numbers
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (!firstNumSelected){
            firstNum += number.textContent;
            showToDisplay(firstNum);
        }
        if (firstNumSelected){
            secondNum += number.textContent;
            showToDisplay(secondNum);
        }
    })
})

addition.addEventListener("click", () => {
    if (firstNum !== ""){
        firstNumSelected = true;
        operator = '+';
        showToDisplay("+");
    }
})

subtraction.addEventListener("click", () => {
    if (firstNum !== ""){
        firstNumSelected = true;
        operator = '-';
        showToDisplay("-");
    }
})

multiplication.addEventListener("click", () => {
    if (firstNum !== ""){
        firstNumSelected = true;
        operator = '*';
        showToDisplay("*");
    }
})

division.addEventListener("click", () => {
    if (firstNum !== ""){
        firstNumSelected = true;
        operator = '/';
        showToDisplay("/");
    }
})

equals.addEventListener("click", () => {
    console.log(firstNum +" "+ operator +" "+ secondNum);
    firstNum = Math.round(operate(operator, parseInt(firstNum), parseInt(secondNum)).toString() * 10) / 10;
    showToDisplay(firstNum);
    operator = "";
    secondNum = "";
})

plusMinusBtn.addEventListener("click", () => {
    if (operator === "" && firstNum !== ""){
        if (parseInt(firstNum) >= 0) {
            firstNum = "-" + firstNum;
        } else {
            firstNum = Math.abs(parseInt(firstNum)).toString();
        }
        showToDisplay(firstNum);
    } else if (secondNum !== ""){
        if (parseInt(secondNum) >= 0) {
            secondNum = "-" + secondNum;
        } else {
            secondNum = Math.abs(parseInt(secondNum)).toString();
        }
        showToDisplay(secondNum);
    }
})