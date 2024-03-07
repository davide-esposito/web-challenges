console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const form = new FormData(event.target);
  const formData = Object.fromEntries(form);
  console.log(formData);

  //   event.target.reset();
  event.target.elements.firstName.focus();

  const ageValue = event.target.elements.age.value;
  const badnessValue = event.target.elements.badness.value;
  console.log(parseInt(ageValue, 10) + parseInt(badnessValue, 10));
});
