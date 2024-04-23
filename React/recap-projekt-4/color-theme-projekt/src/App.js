import "./App.css";
import Header from "./components/Header/Header.js";
import Theme from "./components/Theme/Theme.js";
import { themes as initialThemes } from "./db.js";
import NewThemeForm from "./components/NewThemeForm/NewThemeForm.js";
import { v4 as uuid } from "uuid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("Themes", {
    defaultValue: initialThemes,
  });

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    setThemes([newThemeWithId, ...themes]);
  }

  function handleDeleteTheme(id) {
    const modifiedThemes = themes.filter((theme) => theme.id !== id);
    setThemes(modifiedThemes);
  }

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main-container">
        <NewThemeForm onSubmit={handleAddTheme} />
        {themes.map((theme) => (
          <Theme
            key={theme.id}
            theme={theme}
            name={theme.name}
            onDelete={handleDeleteTheme}
          />
        ))}
      </main>
    </>
  );
}
