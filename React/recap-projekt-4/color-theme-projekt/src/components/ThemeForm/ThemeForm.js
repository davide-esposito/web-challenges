import "./ThemeForm.css";

const initialTheme = {
  name: "",
  colors: [
    { role: "primary", value: "#6200ee" },
    { role: "secondary", value: "#03dac6" },
    { role: "surface", value: "#ffffff" },
    { role: "surface-on", value: "#000000" },
  ],
};

export default function ThemeForm({
  onAdd,
  initialData = initialTheme,
  isEditMode,
  onEdit,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
      id: initialData.id,
      name: data.name,
      colors: [
        { role: "primary", value: data.primary },
        { role: "secondary", value: data.secondary },
        { role: "surface", value: data.surface },
        { role: "surface-on", value: data["surface-on"] },
      ],
    };
    console.log("Primary Color:", data.primary);
    console.log("Secondary Color:", data.secondary);
    console.log("Surface Color:", data.surface);
    console.log("Surface-on Color:", data["surface-on"]);
    console.log("New Theme Object:", newTheme);

    if (isEditMode) {
      onEdit(newTheme);
    } else {
      onAdd(newTheme);
    }
    event.target.reset();
  }

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="theme-form__title">
        {isEditMode ? "Edit Theme" : "Add new Theme"}
      </h2>
      <div className="theme-form__name-input">
        <label htmlFor="name">Theme Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter Theme-Name"
          autoComplete="name"
          defaultValue={initialData.name}
          required
        />
      </div>
      <fieldset className="theme-form__color-inputs">
        {initialData.colors.map((color) => (
          <div key={color.role}>
            <label htmlFor={color.role}>{color.role}:</label>

            <input
              id={color.role}
              className="theme-form__color-input"
              type="color"
              name={color.role}
              defaultValue={color.value}
            />
          </div>
        ))}
      </fieldset>
      <button className="theme-form__submit-button" type="submit">
        {isEditMode ? "Update Theme" : "Add Theme"}
      </button>
    </form>
  );
}
