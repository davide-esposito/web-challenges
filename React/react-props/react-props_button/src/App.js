import React from "react";
import "./styles.css";

function Button({ color, disabled, text, onClick }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Button
      color="green"
      disabled={false}
      text="Button"
      onClick={handleClick}
    />
  );
}
