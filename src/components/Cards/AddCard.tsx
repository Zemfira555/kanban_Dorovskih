import React, { useEffect, useState } from "react";
import { Card, Task } from "../../types/types";

const AddCard: React.FC<{
  task: Task;
  setCards: (value: Card[]) => void;
  cards: Card[];
}> = ({ task, setCards, cards }) => {
  const [addMode, setAddMode] = useState<boolean>(false);
  const [value, setValue] = useState<number | null>(
    cards.find((cardItem) => cardItem.type === task.id - 1)?.id || null
  );
  console.log(task.id);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setValue(
      cards.find((cardItem) => cardItem.type === task.id - 1)?.id || null
    );
  }, [cards]);

  const addTask = () => {
    if (value) {
      setAddMode(false);
      setValue(null);
      setText("");
      return setCards(
        cards.map((cardItem: Card) => {
          if (cardItem.id === value) {
            return {
              ...cardItem,
              type: task.id,
            };
          }

          return cardItem;
        })
      );
    }
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        title: text,
        description: "",
        type: task.id,
      },
    ]);

    setAddMode(false);
    setValue(null);
    setText("");
  };

  return (
    <div className="flex gap-3">
      {!addMode ? (
        <div
          className="text-[#5E6C84] flex items-center gap-1 cursor-pointer"
          onClick={() => {
            if (task.id === 1 || value) {
              setAddMode(true);
            }
          }}
        >
          <span className="text-xl">+</span>
          <span>Add card</span>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2">
          {task.id !== 1 ? (
            <div className="w-full">
              <select
                className="w-full h-[30px]"
                value={Number(value)}
                onChange={(e) => setValue(Number(e.target.value))}
              >
                {cards.map((card: Card) => {
                  if (card.type === task.id - 1) {
                    return (
                      <option onClick={() => setValue(card.id)} value={card.id}>
                        {card.title}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2">
              <input
                className="w-full rounded h-[30px]"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          )}
          <button
            className={`bg-[#0079BF] ${
              !value && !text && "bg-gray-400 text-black"
            } w-[40%] rounded p-1 text-white`}
            onClick={() => addTask()}
            disabled={!value && !text}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCard;
