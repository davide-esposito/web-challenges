import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  const emoji = isHappy ? "😁" : "😭";
  return (
    <span role="img" aria-label="smiley">
      {emoji}
    </span>
  );
}

export default function App() {
  return (
    <div>
      <h1>How are you today?</h1>
      <Smiley isHappy={true} />
      <Smiley />
    </div>
  );
}
