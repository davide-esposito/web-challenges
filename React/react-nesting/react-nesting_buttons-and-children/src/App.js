import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>click me</Button>
      <Button>dont click me</Button>
      <Button>joke</Button>
      <Button>just click me</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
