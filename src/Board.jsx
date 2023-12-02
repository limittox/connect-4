import { useState, useEffect } from "react";
import Column from "./Column";
import TurnIndicator from "./TurnIndicator";
import WinnerIndicator from "./WinnerIndicator";

const ROWS = 6;
const COLUMNS = 7;
const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const Board = () => {
  const [slots, setSlots] = useState(
    Array(COLUMNS)
      .fill(null)
      .map(() => Array(ROWS).fill(null))
  );
  const [playerMove, setPlayerMove] = useState(FIRST_PLAYER);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log(winner);
  }, [winner]);

  const checkWin = (slots) => {
    for (let i = 0; i < COLUMNS; i++) {
      for (let j = 0; j < ROWS; j++) {
        if (slots[i][j] !== null) {
          if (
            j + 3 < ROWS &&
            slots[i][j] === slots[i][j + 1] &&
            slots[i][j] === slots[i][j + 2] &&
            slots[i][j] === slots[i][j + 3]
          ) {
            return slots[i][j];
          }
          if (
            i + 3 < COLUMNS &&
            slots[i][j] === slots[i + 1][j] &&
            slots[i][j] === slots[i + 2][j] &&
            slots[i][j] === slots[i + 3][j]
          ) {
            return slots[i][j];
          }
          if (
            i + 3 < COLUMNS &&
            j + 3 < ROWS &&
            slots[i][j] === slots[i + 1][j + 1] &&
            slots[i][j] === slots[i + 2][j + 2] &&
            slots[i][j] === slots[i + 3][j + 3]
          ) {
            return slots[i][j];
          }
          if (
            i + 3 < COLUMNS &&
            j - 3 >= 0 &&
            slots[i][j] === slots[i + 1][j - 1] &&
            slots[i][j] === slots[i + 2][j - 2] &&
            slots[i][j] === slots[i + 3][j - 3]
          ) {
            return slots[i][j];
          }
        }
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (!winner) {
      const newSlots = slots.map((row) => [...row]);
      for (let j = ROWS - 1; j >= 0; j--) {
        if (newSlots[i][j] === null) {
          newSlots[i][j] = playerMove;
          break;
        }
      }
      setSlots(newSlots);
      setPlayerMove(playerMove === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER);
      setWinner(checkWin(newSlots));
    }
  };

  const handleResetClick = () => {
    setSlots(Array(COLUMNS)
    .fill(null)
    .map(() => Array(ROWS).fill(null)));
    setPlayerMove(FIRST_PLAYER);
    setWinner(null);
  };

  return (
    <div className="flex justify-items-center items-center gap-4 mt-8 ml-8 mr-8  grid grid-rows-[max-content_1fr]">
      <TurnIndicator turn={playerMove} />
      <div className="grid grid-cols-7 w-140 h-120">
        {slots.map((row, i) => (
          <Column
            key={i}
            colIndex={i}
            slots={slots}
            playerMove={playerMove}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
      {winner !== null && (
        <WinnerIndicator winner={winner} onClick={() => handleResetClick()} />
      )}
    </div>
  );
};

export default Board;
