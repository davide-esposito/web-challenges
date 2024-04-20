import "./ThemeCard.css";
import ColorCard from "../ColorCard/ColorCard";

export default function ThemeCard({ theme }) {
  return (
    <>
      <h2>{theme.name}</h2>
      {theme.colors.map((color) => (
        <ColorCard key={color.role} color={color} />
      ))}
    </>
  );
}
