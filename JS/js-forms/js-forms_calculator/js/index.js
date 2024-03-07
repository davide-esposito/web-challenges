console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const a = form.elements.numberA.value;
  const b = form.elements.numberB.value;
  const operator = form.elements.operator.value;

  if (operator === "addition") {
    result = add(a, b);
  } else if (operator === "subtraction") {
    result = subtract(a, b);
  } else if (operator === "multiplication") {
    result = multiply(a, b);
  } else if (operator === "division") {
    result = divide(a, b);
  } else {
    result = "invalid";
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
