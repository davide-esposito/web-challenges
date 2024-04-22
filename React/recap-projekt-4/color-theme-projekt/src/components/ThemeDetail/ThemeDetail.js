import "./ThemeDetail.css";
import ColorCard from "../ColorCard/ColorCard";

export default function ThemeDetail({ theme }) {
  return (
    <section className="theme-detail">
      <div className="color-cards">
        {" "}
        {theme.colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
    </section>
  );
}
