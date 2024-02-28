console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// dark-mode
const addDarkBtn = document.querySelector(`[data-js="dark-mode-button"]`);

console.log(addDarkBtn);

addDarkBtn.addEventListener("click", () => {
    bodyElement.classList.add("dark")
});

// light-mode
const addLightBtn = document.querySelector(`[data-js="light-mode-button"]`);

console.log(addLightBtn);

addLightBtn.addEventListener("click", () => {
    bodyElement.classList.remove("dark")
});

// toggle-mode
const addToggleBtn = document.querySelector(`[data-js="toggle-button"]`);

console.log(addToggleBtn);

addToggleBtn.addEventListener("click", () => {
    bodyElement.classList.toggle("dark")
});