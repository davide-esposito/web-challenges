import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}

export default function App() {
  return <Sum valueA={3} valueB={5} />;
}
