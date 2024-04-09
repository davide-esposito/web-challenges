import React from "react";
import "./styles.css";

function Greeting({ name }) {
  const coaches = ["Max", "Alex"];
  return <h1>{coaches.includes(name) ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Davide" />
    </div>
  );
}
