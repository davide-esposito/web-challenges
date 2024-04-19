import { themes } from "../db";
import ThemeCard from "../ThemeCard/ThemeCard";

export default function ThemeDisplay() {
  return (
    <>
      {themes.map((theme) => (
        <ThemeCard key={theme.id} theme={theme} />
      ))}
    </>
  );
}
