export default function Form({ onCreateUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    const fieldName = event.target.name.value;
    const fieldEmail = event.target.email.value;
    onCreateUser(fieldName, fieldEmail);
    // console.log(fieldName);
    // console.log(fieldEmail);
    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
