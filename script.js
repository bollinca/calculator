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

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const button0 = document.getElementById('button-0');

const buttonAdd = document.getElementById('button-add');
const buttonSub = document.getElementById('button-sub');
const buttonMult = document.getElementById('button-mult');
const buttonDivi = document.getElementById('button-divi');
const buttonEqual = document.getElementById('button-equal');

button1.addEventListener('click', () => changeDisplay(1));
button2.addEventListener('click', () => changeDisplay(2));
button3.addEventListener('click', () => changeDisplay(3));
button4.addEventListener('click', () => changeDisplay(4));
button5.addEventListener('click', () => changeDisplay(5));
button6.addEventListener('click', () => changeDisplay(6));
button7.addEventListener('click', () => changeDisplay(7));
button8.addEventListener('click', () => changeDisplay(8));
button9.addEventListener('click', () => changeDisplay(9));
button0.addEventListener('click', () => changeDisplay(0));
