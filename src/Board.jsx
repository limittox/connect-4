import { useState, useEffect } from 'react';
import Column from "./Column";

const ROWS = 6;
const COLUMNS = 7;
const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const Board = () => {
  const [slots, setSlots] = useState(Array(COLUMNS).fill(null).map(() => Array(ROWS).fill(null)));
  const [playerMove, setPlayerMove] = useState(FIRST_PLAYER);

  useEffect(() => {
    console.log(checkWin(slots));
  }, [slots])

  const checkWin = (slots) => {
    for (let i = 0; i < COLUMNS; i++) {
      for (let j = 0; j < ROWS; j++) {
        if (slots[i][j] !== null) {
          if (j + 3 < ROWS && slots[i][j] === slots[i][j+1] && slots[i][j] === slots[i][j+2] && slots[i][j] === slots[i][j+3]) {
            return slots[i][j];
          }
          if (i + 3 < COLUMNS && slots[i][j] === slots[i+1][j] && slots[i][j] === slots[i+2][j] && slots[i][j] === slots[i+3][j]) {
            return slots[i][j];
          }
          if (i + 3 < COLUMNS && j + 3 < ROWS && slots[i][j] === slots[i+1][j+1] && slots[i][j] === slots[i+2][j+2] && slots[i][j] === slots[i+3][j+3]) {
            return slots[i][j];
          }
          if (i + 3 < COLUMNS && j - 3 >= 0 && slots[i][j] === slots[i+1][j-1] && slots[i][j] === slots[i+2][j-2] && slots[i][j] === slots[i+3][j-3]) {
            return slots[i][j];
          }
        }
      }
    }
    return null;
  }

  const handleClick = (i) => {
    const newSlots = slots.map(row => [...row]);
    for (let j = ROWS-1; j >= 0; j--) {
      if (newSlots[i][j] === null) {
        newSlots[i][j] = playerMove;
        break;
      }
    }
    setSlots(newSlots);
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
