
let calculation = localStorage.getItem('calculation') || '';

equalElement();

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', calculation);
  document.querySelector('.js-upward').innerText = calculation;
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function equalElement() {
  calculation = eval(calculation);
  localStorage.setItem('Calculation', calculation);
  document.querySelector('.js-upward').innerText = calculation;
}

function clearElement(event) {
  calculation = '';
  localStorage.setItem('Calculation', calculation);
  document.querySelector('.js-upward').innerText = calculation;
}
