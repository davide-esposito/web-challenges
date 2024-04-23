import "./ThemeDetail.css";
import ColorCard from "../ColorCard/ColorCard";

export default function ThemeDetail({ theme, onDelete }) {
  return (
    <section className="theme-detail">
      <div className="color-cards">
        {" "}
        {theme.colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
      <button
        onClick={() => onDelete(theme.id)}
        className="detail-theme__delete-button"
        type="button"
      >
        Delete Theme
      </button>
    </section>
  );
}
