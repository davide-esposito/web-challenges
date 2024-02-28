const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  const age = Number(input.value);

  if (age >= 13 && age <= 18) {
    output.textContent = "You are a teen.";
  } else {
    output.textContent = "You are not a teen.";
  }
});
