function setOperListen() {
    const oppButtons = Array.from(document.querySelectorAll('.opp-button'));
    oppButtons.forEach(oppButton => oppButton.addEventListener('click', () => {
        if (prevNumInput !== '' && currentNumInput !== '') {
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

function updateDisplay(input) {
    displayField.textContent = input;
}

function operate(num1, num2, operation) {
    if(operation === divide && num2 === '0') {
        return ('Can\'t divide by zero.');
    } else {
        result = operation(num1, num2);
        return result = roundDecimals(result);
    }
}

function roundDecimals(result) {
    if (result.toString().length > 6) {
        return result = (Math.round(result * 10000) / 10000);
    }
    else {
        return result
    }
}

function add(num1, num2) {
    return result = +num1 + +num2;
}

function subtract(num1, num2) {
    return result = num1 - num2;
}

function multiply(num1, num2 = 1) {
    return result = num1 * num2;
}

function divide(num1, num2 = 1) {
    if (num2 == 0) {
        clearAll();
        return; 
    } else {
        return result = num1 / num2;
    }    
}

function storeInput() {
    if (result || result === 0) {
        prevNumInput = result;
        currentNumInput = '';
    } else {
        prevNumInput = currentNumInput;
        currentNumInput = '';
    }
}

function setNumListen() {
    const numButtons = Array.from(document.querySelectorAll('.num-button'));
    numButtons.forEach(numButton => numButton.addEventListener('click', () => {
        currentNumInput = currentNumInput + numButton.textContent;
        updateDisplay(currentNumInput);
    }));
    const decButton = document.querySelector('#dec-button');
    decButton.addEventListener('click', () => {
        if (currentNumInput.includes('.') !== true) {
            currentNumInput = currentNumInput + decButton.textContent;
            updateDisplay(currentNumInput);
        }
    });
}

function setMiscListen() {
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => clearAll());
    const equalButton = document.querySelector('#equal');
    equalButton.addEventListener('click', function () {
        if (currentNumInput !== '' && prevNumInput !== '') {
            updateDisplay(operate(prevNumInput, currentNumInput, currentOper));
            storeInput();
        } else {
            return;
        }
    });
    const backspaceButton = document.querySelector('#backspace');
    backspaceButton.addEventListener('click', () => useBackspace());
}

function clearAll() {
    prevNumInput = '';
    currentNumInput = '';
    result = '';
    currentOper = '';
    updateDisplay('--------');
}

function useBackspace() {
    if (currentNumInput !== '') {
        return currentNumInput = popFrom(currentNumInput);
    } else if (result) {
        result = result.toString();
        return result = popFrom(result);
    }
}

function popFrom(value) {
    backspaceArray = Array.from(value);
        backspaceArray.pop();
        value = backspaceArray.join('');
        updateDisplay(value);
        return value;
}

function activateButton(e) {
    const keyboardInput = document.querySelector(`button[data-key='${e.key}']`);
    if (keyboardInput) {
        e.preventDefault();
        keyboardInput.click();
    }
}

let prevNumInput = '';
let currentNumInput = '';
let result = '';
let currentOper = '';

const displayField = document.getElementById('display');
updateDisplay('--------');

window.addEventListener('keydown', activateButton);
setNumListen();
setOperListen();
setMiscListen();