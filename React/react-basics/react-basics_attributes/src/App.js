import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My Article</h2>
      <label htmlFor="inputField">Input Field:</label>
      <input id="inputfield" />
      <a
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
        className="article__link"
      >
        Wikipedia Link
      </a>
    </article>
  );
}
