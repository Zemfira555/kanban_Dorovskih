import { useParams } from "react-router-dom";
import { Card } from "../types/types";
import { useEffect, useState } from "react";

const CardPage: React.FC<{
  cards: Card[];
  setCards: (value: Card[]) => void;
}> = ({ cards, setCards }) => {
  const id = useParams().id;
  const cardFound = cards.find((cardItem: Card) => cardItem.id === Number(id));
  const [card, setCard] = useState<Card>(cardFound!);
  const [description, setDescription] = useState<string>(
    card.description || "This task has no description"
  );
  const [editMode, setEditMode] = useState<boolean>(false);

  console.log(cards);

  return (
    <div className="w-full h-[78vh] bg-white rounded-xl p-5">
      <header className="flex w-full justify-between items-center">
        <h1 className="text-4xl">{card.title}</h1>
        <div
          onClick={() => {
            window.history.back();
          }}
        >
          <img
            src="/icon/close.svg"
            alt="Close button"
            height={65}
            width={65}
            className="cursor-pointer"
          />
        </div>
      </header>
      <main className="mt-5 text-xl">
        {editMode ? (
          <div>
            <textarea
              className="w-full h-[55vh] bg-gray-200 rounded-xl p-5"
              value={description}
              autoFocus
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex gap-3">
              <button
                className={`bg-[#0079BF] w-full h-[50px] text-xl rounded p-1 text-white`}
                onClick={() => {
                  console.log(
                    cards.map((cardItem: Card) => {
                      if (cardItem.id == card.id) {
                        return true;
                      }
                    })
                  );
                  setCards(
                    cards.map((cardItem: Card) => {
                      if (cardItem.id == card.id) {
                        return { ...cardItem, description };
                      }
                      return cardItem;
                    })
                  );
                  setEditMode(false);
                }}
              >
                Submit
              </button>
              <button
                className={`bg-red-400 w-full h-[50px] text-xl rounded p-1 text-white`}
                onClick={() => {
                  setEditMode(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            className="w-full h-[60vh] rounded-xl p-5"
            onDoubleClick={() => setEditMode(true)}
          >
            {description}
          </div>
        )}
      </main>
    </div>
  );
};

export default CardPage;
