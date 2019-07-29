const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2 = 1) => {
    return num1 * num2;
};

const divide = (num1, num2 = 1) => {
    return num1 / num2;
};

const operate = (num1, num2, operator) => {
    return operator(num1, num2);
}

const updateDisplay = () => {
    return display.textContent = newDisplayValue;
}

const clearDisplay = () => {
    newDisplayValue = '';
    updateDisplay();
}

const display = document.getElementById('display');
display.textContent = 'Hello, please press a button.'
let displayValue = display.textContent;
let oldDisplayValue = '';
let newDisplayValue = '';


function assignNumButtonEvents() {
    const buttons = Array.from(document.querySelectorAll('.num-button'));
    buttons.forEach(button => button.addEventListener('click', () => (newDisplayValue = newDisplayValue + button.textContent)));

}

function assignOperButtonEvents () {
    const clearButton = document.querySelector('#clear')
    clearButton.addEventListener('click', () => clearDisplay());
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', () => console.error('FIX ADDITION-EVENT'));
    const subButton = document.querySelector('#sub');
    subButton.addEventListener('click', () => console.error('FIX SUBTRACTION-EVENT'));
    const multButton = document.querySelector('#mult');
    multButton.addEventListener('click', () => console.error('FIX MULTIPLY-EVENT'));
    const diviButton = document.querySelector('#divi');
    diviButton.addEventListener('click', () => console.error('FIX DIVISION-EVENT'));
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', () => console.error('FIX EQUAL-EVENT'));
}

assignNumButtonEvents();
assignOperButtonEvents();