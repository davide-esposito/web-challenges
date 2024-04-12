import Card from "./components/Card.js";

export default function App() {
  const fruits = [
    {
      id: 1001,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1002,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1003,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 1004,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1005,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
