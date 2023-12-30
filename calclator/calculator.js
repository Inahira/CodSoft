let displayValue = '';
let firstValue = null;
let secondValue = null;
let currentOperator = null;

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearAll() {
  displayValue = '';
  firstValue = null;
  secondValue = null;
  currentOperator = null;
  updateDisplay();
}

function handleNumberClick(value) {
  displayValue += value;
  updateDisplay();
}

function handleOperatorClick(operator) {
  if (currentOperator !== null && secondValue !== null) {
    calculate();
  }
  currentOperator = operator;
  if (firstValue === null) {
    firstValue = parseFloat(displayValue);
    displayValue = '';
  }
}

function calculate() {
  if (currentOperator === null || secondValue !== null) {
    return;
  }
  
  secondValue = parseFloat(displayValue);

  switch (currentOperator) {
    case '+':
      displayValue = (firstValue + secondValue).toString();
      break;
    case '-':
      displayValue = (firstValue - secondValue).toString();
      break;
    case '*':
      displayValue = (firstValue * secondValue).toString();
      break;
    case '/':
      if (secondValue === 0) {
        displayValue = 'Error: Division by zero';
      } else {
        displayValue = (firstValue / secondValue).toString();
      }
      break;
    default:
      break;
  }

  firstValue = parseFloat(displayValue);
  secondValue = null;
  currentOperator = null;
  updateDisplay();
}

document.getElementById('clear').addEventListener('click', clearAll);

document.getElementById('equals').addEventListener('click', calculate);

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    handleNumberClick(button.innerText);
  });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    handleOperatorClick(button.innerText);
  });
});
