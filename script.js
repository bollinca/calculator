const add = (num1, num2) => {
    return solution = +num1 + +num2;
};

const subtract = (num1, num2) => {
    return solution = num1 - num2;
};

const multiply = (num1, num2 = 1) => {
    return solution = num1 * num2;
};

const divide = (num1, num2 = 1) => {
    return solution = num1 / num2;
};

const roundDecimals = (longDecimal) => {
    if(longDecimal.toString().length > 6) {
       return longDecimal = (Math.round(longDecimal * 10000) / 10000);
    } 
    else {
        return longDecimal 
    }
}

const operate = (num1, num2, operator) => {
    solution = operator(num1, num2);
    return solution = roundDecimals(solution);
};

const storeInput = () => {
    if (solution) {
        prevNumInput = solution;
        currentNumInput = '';
    } else {
        prevNumInput = currentNumInput;
        currentNumInput = '';
    }
}


const clearAll = () => {
    prevNumInput = '';
    currentNumInput = '';
    solution = '';
    currentOper = '';
    updateDisplay('--------');
}

function updateDisplay(input) {
    displayField.textContent = input;
};

function setNumListen() {
    const numButtons = Array.from(document.querySelectorAll('.num-button'));
    numButtons.forEach(numButton => numButton.addEventListener('click', () => {
        currentNumInput = currentNumInput + numButton.textContent;
        updateDisplay(currentNumInput);
    }));
}

function setOperListen() {
    const oppButtons = Array.from(document.querySelectorAll('.opp-button'));
    oppButtons.forEach(oppButton => oppButton.addEventListener('click', () => {
        if (prevNumInput != '' && currentNumInput != '') {
            updateDisplay(operate(prevNumInput, currentNumInput, currentOper));
        } else {
            return;
        }
    }));
    oppButtons.forEach(oppButton => oppButton.addEventListener('click', storeInput));    

    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', () => currentOper = add);
    const subButton = document.querySelector('#sub');
    subButton.addEventListener('click', () => currentOper = subtract);
    const multButton = document.querySelector('#mult');
    multButton.addEventListener('click', () => currentOper = multiply);
    const diviButton = document.querySelector('#divi');
    diviButton.addEventListener('click', () => currentOper = divide);
}

function setMiscListen() {
    const clearButton = document.querySelector('#clear')
    clearButton.addEventListener('click', () => clearAll());
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', function () {
        if (currentNumInput && prevNumInput) {
            updateDisplay(operate(prevNumInput, currentNumInput, currentOper));
            currentNumInput = '';
        } else {
            return;
        }
    });
}

let prevNumInput = '';
let currentNumInput = '';
let solution = '';
let currentOper = '';

const displayField = document.getElementById('display');
updateDisplay('--------');

setNumListen();
setOperListen();
setMiscListen();