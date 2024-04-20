import "./App.css";
import Header from "./Header/Header.js";
import Themes from "./Themes/Themes.js";

export default function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main-container">
        <Themes />
      </main>
    </>
  );
}
