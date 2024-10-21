import React from "react";
import { Link } from "react-router-dom";
import { Card, Task } from "../../types/types";
import AddCard from "./AddCard";

const CardItem: React.FC<{
  task: Task;
  cards: Card[];
  setCards: (value: Card[]) => void;
}> = ({ task, cards, setCards }) => {
  return (
    <div className="min-h-[10vh] h-full max-h-[70vh] w-[23vw] sm:w-full rounded-xl bg-[#EBECF0] p-2 px-3 flex flex-col gap-2 overflow-y-auto">
      <div className="text-xl">{task.title}</div>
      <div className="flex flex-col gap-2">
        {cards.map((card: Card) => {
          if (card.type === task.id) {
            return (
              <div key={card.id}>
                <Link to={`/card/${card.id}`}>
                  <div className="w-full bg-white p-1 rounded cursor-pointer">
                    {card.title}
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
      <AddCard setCards={setCards} task={task} cards={cards} />
    </div>
  );
};

export default CardItem;
