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

const moveValues = () => {
    if (solution) {
        prevCalcInput = solution;
        currentCalcInput = '';
    } else {
        prevCalcInput = currentCalcInput;
        currentCalcInput = '';
    }
}

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

const clearAll = () => {
    prevCalcInput = '';
    currentCalcInput = '';
    solution = '';
    display.textContent = '--------';
    selectedOpp = '';
}

function assignNumButtonEvents() {
    const numButtons = Array.from(document.querySelectorAll('.num-button'));
    numButtons.forEach(numButton => numButton.addEventListener('click', () => {
        currentCalcInput = currentCalcInput + numButton.textContent;
        display.textContent = currentCalcInput;
    }));
}

function assignOperButtonEvents() {
    const oppButtons = Array.from(document.querySelectorAll('.opp-button'));
    oppButtons.forEach(oppButton => oppButton.addEventListener('click', () => {
        if (prevCalcInput != '' && currentCalcInput != '') {
            display.textContent = operate(prevCalcInput, currentCalcInput, selectedOpp);
        } else {
            return;
        }
    }));
    oppButtons.forEach(oppButton => oppButton.addEventListener('click', moveValues));
    const clearButton = document.querySelector('#clear')
    clearButton.addEventListener('click', () => clearAll());
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', () => selectedOpp = add);
    const subButton = document.querySelector('#sub');
    subButton.addEventListener('click', () => selectedOpp = subtract);
    const multButton = document.querySelector('#mult');
    multButton.addEventListener('click', () => selectedOpp = multiply);
    const diviButton = document.querySelector('#divi');
    diviButton.addEventListener('click', () => selectedOpp = divide);
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', function () {
        if (currentCalcInput && prevCalcInput) {
            display.textContent = operate(prevCalcInput, currentCalcInput, selectedOpp);
            currentCalcInput = '';
        } else {
            return;
        }
    });

}

const display = document.getElementById('display');
display.textContent = '--------'
let prevCalcInput = '';
let currentCalcInput = '';
let selectedOpp;
let solution;

assignNumButtonEvents();
assignOperButtonEvents();