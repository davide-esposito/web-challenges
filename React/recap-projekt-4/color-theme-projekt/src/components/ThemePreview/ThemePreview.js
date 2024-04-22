import "./ThemePreview.css";

export default function ThemePreview({ theme }) {
  return (
    <section className="theme-preview">
      {theme.colors.map((color) => (
        <div
          key={color.role}
          className="theme-preview_color"
          style={{ backgroundColor: color.value }}
        ></div>
      ))}
    </section>
  );
}
