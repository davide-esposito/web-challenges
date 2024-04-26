import "./App.css";
import Header from "./components/Header/Header.js";
import Theme from "./components/Theme/Theme.js";
import { themes as initialThemes } from "./db.js";
import NewThemeForm from "./components/ThemeForm/ThemeForm.js";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("Themes", {
    defaultValue: initialThemes,
  });

  useEffect(() => {
    console.log("Themes updated:", themes);
  }, [themes]);

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    const newThemes = [newThemeWithId, ...themes];
    console.log("Adding new theme:", newThemeWithId);
    setThemes(newThemes);
    console.log("Updated themes list after adding:", newThemes);
  }

  function handleDeleteTheme(id) {
    console.log("Deleting theme with ID:", id);
    const updatedThemes = themes.filter((theme) => theme.id !== id);
    console.log("Updated themes list after deletion:", updatedThemes);
    setThemes(updatedThemes);
  }

  function handleEditTheme(updatedTheme) {
    console.log("Editing theme:", updatedTheme);

    const modifiedThemes = themes.map((theme) => {
      if (theme.id === updatedTheme.id) {
        return updatedTheme;
      }
      return theme;
    });
    console.log("Current themes before update:", themes);
    setThemes(modifiedThemes);
    console.log("Current themes after update:", modifiedThemes);
  }

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main-container">
        <NewThemeForm onAdd={handleAddTheme} />
        {themes.map((theme) => (
          <Theme
            key={theme.id}
            theme={theme}
            onDelete={handleDeleteTheme}
            onEdit={handleEditTheme}
          />
        ))}
      </main>
    </>
  );
}
