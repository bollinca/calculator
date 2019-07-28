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

const changeDisplay = (value) => {
    return display.textContent = value;
}


const display = document.getElementById('display');

function assignButtonEvents() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => button.addEventListener('click', () => changeDisplay(button.textContent)));
}

assignButtonEvents();