import "./App.css";
import Header from "./Header/Header.js";
import ThemeDisplay from "./ThemeDisplay/ThemeDisplay.js";

export default function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main-container">
        <ThemeDisplay />
      </main>
    </>
  );
}
