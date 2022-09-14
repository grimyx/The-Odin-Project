const calcInput = document.getElementById("calcInput");
const resultDisplay = document.getElementById("result");

let operator = "";
let result = 0;

const numberButton = (number) => {
    calcInput.innerText = calcInput.innerText + number;
}

const clearInput = () => {
    calcInput.innerText = "";
}

const clearResult = () => {
    result = 0;
}

const clearOperation = () => {
    operator = "";
}

const clearResultDisplay = () => {
    resultDisplay.innerText = "";
}

const ac = () => {
    clearInput();
    clearResult();
    clearOperation();
    clearResultDisplay();
}

const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => {
    if(a === 0) {
        alert("Error: Can'd divide zero !!!");
    } else if(b === 0) {
        alert("Error: Can't divide with zero !!!");
    } else {
        return a / b;
    }
}

const operate = (a,b,operation) => {
    switch(operation) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
}

const setOperation = (operation) => {
    if(operator === "") {
        result = Number(calcInput.innerText);
        operator = operation;
        clearInput()
    } else {
        result = operate(result,Number(calcInput.innerText),operator)
        updateResultDisplay(result);
        clearInput();
        operator = operation;
    }
    clearInput();
}

const getResult = () => {
    if(operator !== ""){
        result = operate(result,Number(calcInput.innerText),operator)
        updateResultDisplay(result);
        clearResult();
        clearOperation();
        clearInput();
    }
}

const percent = () => {
    calcInput.innerText = Number(calcInput.innerText)  / 100;
}

const plusMinus = () => {
    if(calcInput.innerText === "") {
        calcInput.innerText = "-";
    } else {
        calcInput.innerText = Number(calcInput.innerText) * (-1)
    }
}

const updateResultDisplay = (text) => {
    resultDisplay.innerText = text;
}

const keyPressed = (e) => {
    console.log(e.keyCode)
    switch(e.key) {
        case "1":
            numberButton(1);
            break;
        case "2":
            numberButton(2);
            break;
        case "3":
            numberButton(3);
            break;
        case "4":
            numberButton(4);
            break;
        case "5":
            numberButton(5);
            break;
        case "6":
            numberButton(6);
            break;
        case "7":
            numberButton(7);
            break;
        case "8":
            numberButton(8);
            break;
        case "9":
            numberButton(9);
            break;
        case "0":
            numberButton(0);
            break;
        case ".":
            numberButton('.');
            break;
        case "+":
            setOperation("+");
            break;
        case "-":
            setOperation("-");
            break;
        case "*":
            setOperation("*");
            break;
        case "/":
            setOperation("/");
            break;
    }

    if(e.keyCode === 13) {
        getResult();
    }

    if(e.keyCode === 27) {
        ac();
    }
}

document.onkeydown = keyPressed;