import "./App.css";
import Header from "./components/Header/Header.js";
import Theme from "./components/Theme/Theme.js";
import { themes } from "./db.js";

export default function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main-container">
        {themes.map((theme) => (
          <Theme key={theme.id} theme={theme} name={theme.name} />
        ))}
      </main>
    </>
  );
}
