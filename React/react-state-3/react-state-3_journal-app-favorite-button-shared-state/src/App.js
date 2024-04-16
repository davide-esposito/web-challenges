import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    isFavourite: false,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    isFavourite: false,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    isFavourite: false,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    isFavourite: false,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { isFavourite: false, id: uid(), date, ...newEntry },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, isFavorite: !entry.isFavorite };
        } else {
          return entry;
        }
      })
    );
  }
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
