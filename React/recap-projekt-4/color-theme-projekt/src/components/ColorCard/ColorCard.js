import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <article className="color-card">
      <div className="color-info">
        <p className="color-card__role">{color.role}</p>
        <p className="color-card__value">{color.value}</p>
      </div>
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
    </article>
  );
}
