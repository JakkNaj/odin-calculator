let firstNumSelected = false;
let firstNum = "";
let operator;
let secondNum = "";

let display = document.getElementById("display");
let clearBtn = document.getElementById("ac");
let numbers = document.querySelectorAll(".number");
let addition = document.getElementById("addition");
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

equals.addEventListener("click", () => {
    showToDisplay(operate(operator, parseInt(firstNum), parseInt(secondNum)));
})