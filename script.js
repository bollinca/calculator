const add = (num1, num2) => {
    solution = num1 + num2;
};

const subtract = (num1, num2) => {
    solution =  num1 - num2;
};

const multiply = (num1, num2 = 1) => {
    solution =  num1 * num2;
};

const divide = (num1, num2 = 1) => {
    solution =  num1 / num2;
};

const operate = (num1, num2, operator) => {
    solution = operator(num1, num2);
    display.textContent = solution;
    prevCalcInput = currentCalcInput;
    currentCalcInput = '';
    updateDisplay();
};

const updateDisplay = () => {
    return display.textContent;
}

const clearAll = () => {
    prevCalcInput = '';
    currentCalcInput = '';
    updateDisplay();
}

function assignNumButtonEvents() {
    const numButtons = Array.from(document.querySelectorAll('.num-button'));
    numButtons.forEach(numButton => numButton.addEventListener('click', () => (currentCalcInput = currentCalcInput + numButton.textContent)));
}

function assignOperButtonEvents () {
    const clearButton = document.querySelector('#clear')
    clearButton.addEventListener('click', () => clearAll());
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', selectedOpp = add);
    const subButton = document.querySelector('#sub');
    subButton.addEventListener('click', selectedOpp = subtract);
    const multButton = document.querySelector('#mult');
    multButton.addEventListener('click', selectedOpp = multiply);
    const diviButton = document.querySelector('#divi');
    diviButton.addEventListener('click', selectedOpp = divide);
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', function () {
        operate(prevCalcInput, currentCalcInput, selectedOpp)
    });
}

const display = document.getElementById('display');
display.textContent = 'Hello, please press a button.'
let displayValue = display.textContent;
let prevCalcInput = '';
let currentCalcInput = '';
let selectedOpp;
let solution;

assignNumButtonEvents();
assignOperButtonEvents();