import "./NewThemeForm.css";

export default function NewThemeForm({ onSubmit }) {
  const initialData = {
    name: "",
    colors: [
      { role: "primary", value: "#6200ee" },
      { role: "secondary", value: "#03dac6" },
      { role: "surface", value: "#ffffff" },
      { role: "surface-on", value: "#000000" },
    ],
  };

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
      name: data.name,
      colors: [
        { role: "primary", value: data.primary },
        { role: "secondary", value: data.secondary },
        { role: "surface", value: data.surface },
        { role: "surface-on", value: data["surface-on"] },
      ],
    };

    onSubmit(newTheme);
    event.target.reset();
  }

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="theme-form__title">Add new Theme</h2>
      <div className="theme-form__name-input">
        <label htmlFor="name">Theme Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Theme-Name"
          required
        />
      </div>
      <fieldset className="theme-form__color-inputs">
        {initialData.colors.map((color) => (
          <div key={color.role}>
            <label htmlFor={color.role}>{color.role}:</label>

            <input
              className="theme-form__color-input"
              type="color"
              name={color.role}
              defaultValue={color.value}
            />
          </div>
        ))}
      </fieldset>
      <button className="theme-form__submit-button" type="submit">
        Add Theme
      </button>
    </form>
  );
}
