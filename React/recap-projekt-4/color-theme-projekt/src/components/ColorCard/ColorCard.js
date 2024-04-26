import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ color }) {
  const [apiColorName, setApiColorName] = useState("");
  useEffect(() => {
    async function getColorName() {
      const cleanHexValue = color.value.replace("#", "");
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
      );
      const data = await response.json();
      setApiColorName(data.name.value);
    }
    getColorName();
  }, [color.value]);

  return (
    <article className="color-card">
      <div className="color-info">
        <p className="color-card__role">{color.role}</p>
        <p className="color-card__name">{apiColorName}</p>
        <p className="color-card__value">{color.value}</p>
      </div>
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
    </article>
  );
}
