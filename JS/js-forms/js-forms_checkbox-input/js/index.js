console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successText = document.querySelector(`[data-js="success"]`);

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessText() {
  successText.setAttribute("hidden", "");
}

function showSuccessText() {
  successText.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    hideTosError();
    showSuccessText();
  } else {
    showTosError();
    hideSuccessText();
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
    hideSuccessText();
  } else {
    showTosError();
    hideSuccessText();
  }
});
