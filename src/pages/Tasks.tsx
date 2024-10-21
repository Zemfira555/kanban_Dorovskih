import CardItem from "../components/Cards/CardItem";
import { Card, Task } from "../types/types";

const Tasks: React.FC<{tasks: Task[], cards: Card[], setCards: (value: Card[]) => void}> = ({tasks, cards, setCards}) => {
  return (
    <main className="h-full">
      <div className="flex gap-3 relative sm:flex-col">
        {tasks.map((item: Task) => {
          return (
            <CardItem
              task={item}
              key={item.id}
              cards={cards}
              setCards={(value: Card[]) => setCards(value)}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Tasks;