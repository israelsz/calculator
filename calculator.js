function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function updateScreen() {
    mainDisplay.textContent = `${firstOp} ${operator} ${secondOp}`;
}

function setOpNumbers() {
    if (operator === ""){
        firstOp = firstOp + this.textContent;
    } else {
        secondOp = secondOp + this.textContent;
    }
    updateScreen();
}

function setOperator() {

    if(operator === ""){
        operator = this.textContent;
    } else {
        if (secondOp != "") {
            evaluate();
        } else {
            operator = this.textContent;
        }
    }

    updateScreen();
}

function evaluate(){
    let a = parseInt(firstOp);
    let b = parseInt(secondOp);
    let result;
    switch (operator) {
        case "÷":
            if(b === 0){
                result = "Can't divide by 0";
            } else {
                result = divide(a,b);
                break;
            }

        case "*":
            result = mul(a,b);
            break;

        case "+":
            result = sum(a,b);
            break;

        case "-":
            result = sub(a,b);
            break;

        default:
            result = "undefined";
            break;
    }

    firstOp = result;
    secondOp = "";
    operator = "";
    updateScreen();
}

function clear(){
    firstOp = "";
    secondOp = "";
    operator = "";
    updateScreen();
}

let firstOp = "";
let secondOp = "";
let operator = "";

const mainDisplay = document.querySelector(".main-screen");
const topScreen = document.querySelector(".top-screen");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equalsBtn = document.getElementById("equals");

numbers.forEach(function(btn){
    btn.addEventListener("click", setOpNumbers);
});

operations.forEach(function(btn){
    btn.addEventListener("click", setOperator);
});

clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", clear);
equalsBtn.addEventListener("click", evaluate);
