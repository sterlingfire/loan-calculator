// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
  let result = {
    amount: document.getElementById("loan-amount").value,
    years: document.getElementById("loan-years").value,
    rate: document.getElementById("loan-rate").value
  }

  
  return result;
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(formValues) {
  let {amount, years, rate}=formValues;
  let i = rate / 12;
  let n = years * 12;
  let p = amount;
  return (p * i) / (1 - (1 + i) ** (-n));
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  let formValues = getFormValues();
  // identify result div 
  let result = document.getElementById("calc-monthly-payment");
  // call calc and add to result div 
  let monthly = calcMonthlyPayment(formValues);
  // limit to two digits 
  result.innerText = `$ ${monthly.toFixed(2)}`;

}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
  let amount = document.getElementById("loan-amount");
  let years = document.getElementById("loan-years");
  let rate = document.getElementById("loan-rate");
<<<<<<< HEAD
  // set initial value 
  amount.value = 10000;
  years.value = 10;
  rate.value = 0.03;
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
