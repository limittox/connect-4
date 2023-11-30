import { useState } from 'react';
import Column from "./Column";

const ROWS = 6;
const COLUMNS = 7;
const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const Board = () => {
  const [slots, setSlots] = useState(Array(COLUMNS).fill(null).map(() => Array(ROWS).fill(null)));
  const [playerMove, setPlayerMove] = useState(FIRST_PLAYER);

  const handleClick = (i) => {
    const newSlots = slots.map(row => [...row]);
    for (let j = ROWS-1; j >= 0; j--) {
      if (newSlots[i][j] === null) {
        newSlots[i][j] = playerMove;
        break;
      }
    }
    setSlots(newSlots);
    console.log(newSlots);
    setPlayerMove(playerMove === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER);
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-7 w-140 h-120">
        {
          slots.map((row, i) => (
            <Column key={i} colIndex={i} slots={slots} setSlots={setSlots} playerMove={playerMove} onClick={() => handleClick(i)} />
          ))
        }
      </div>
    </div>
  );
};

export default Board;
