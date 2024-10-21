import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardPage from "./pages/CardPage";
import Tasks from "./pages/Tasks";
import { Card, Task } from "./types/types";

const tasks: Task[] = [
  {
    id: 1,
    title: "Backlog",
  },
  {
    id: 2,
    title: "Ready",
  },
  {
    id: 3,
    title: "In progress",
  },
  {
    id: 4,
    title: "Finished",
  },
]

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(
    JSON.parse(localStorage.getItem("cards")!) || []
  );

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    setCards(JSON.parse(localStorage.getItem("cards")!));
  }, [JSON.stringify(cards)]);

  return (
    <div className="bg-[#0079BF] h-full min-h-screen">
      <Header />
      <div className="p-7 min-h-[85.5vh] h-full">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Tasks tasks={tasks} cards={cards} setCards={setCards} />
              }
            />
            <Route path="/card/:id" element={<CardPage setCards={(value: Card[]) => setCards(value)} cards={cards} />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer
        activeTasksCount={cards.filter((value) => value.type === 1).length}
        finishedTasksCount={cards.filter((value) => value.type === 4).length}
      />
    </div>
  );
};

export default App;
