import { useState, useEffect } from "react";
import Column from "./Column";
import TurnIndicator from "./TurnIndicator";
import WinnerIndicator from "./WinnerIndicator";

const ROWS = 6;
const COLUMNS = 7;
const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";
const MAX_DEPTH = 6;

const Board = ({ playMode }) => {
  const [slots, setSlots] = useState(
    Array(COLUMNS)
      .fill(null)
      .map(() => Array(ROWS).fill(null))
  );
  const [playerMove, setPlayerMove] = useState(FIRST_PLAYER);
  const [winner, setWinner] = useState(null);
  const columnOrder = [3, 2, 4, 1, 5, 0, 6];
  

  useEffect(() => {
    if (playMode === "singlePlayer" && playerMove === SECOND_PLAYER && !checkWin(slots)) {
      setTimeout(() => computerMove(), 300);
    }
  }, [slots, playerMove, playMode]);

  const checkWin = (slots) => {
    let slotFilledCount = 0;
    for (let i = 0; i < COLUMNS; i++) {
      for (let j = 0; j < ROWS; j++) {
        if (slots[i][j] !== null) {
          slotFilledCount++;
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

    if (slotFilledCount === ROWS * COLUMNS) {
      return "Draw";
    }

    return null;
  };

  const minimax = (board, depth, alpha, beta, maximizingPlayer) => {
    const winner = checkWin(board);
    if (depth === 0 || winner) {
      let score = 0;
      if (winner === SECOND_PLAYER) score = 10000000;
      else if (winner === FIRST_PLAYER) score = -10000000;
      return score - (MAX_DEPTH - depth + 1); // Draw or depth limit
    }
  
    if (maximizingPlayer) {
      let maxEval = -Infinity;
      for (let i = 0; i < COLUMNS; i++) {
        const newBoard = makeTempMove(board, columnOrder[i], SECOND_PLAYER);
        if (newBoard) {
          const evaluation = minimax(newBoard, depth - 1, alpha, beta, false);
          maxEval = Math.max(maxEval, evaluation);
          alpha = Math.max(alpha, evaluation);
          if (beta <= alpha) break;
        }
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let i = 0; i < COLUMNS; i++) {
        const newBoard = makeTempMove(board, columnOrder[i], FIRST_PLAYER);
        if (newBoard) {
          const evaluation = minimax(newBoard, depth - 1, alpha, beta, true);
          minEval = Math.min(minEval, evaluation);
          beta = Math.min(beta, evaluation);
          if (beta <= alpha) break;
        }
      }
      return minEval;
    }
  };
  
  const makeTempMove = (board, col, player) => {
    const newBoard = board.map(row => [...row]);
    for (let j = ROWS - 1; j >= 0; j--) {
      if (newBoard[col][j] === null) {
        newBoard[col][j] = player;
        return newBoard;
      }
    }
    return null; // Column is full
  };
  
  const computerMove = () => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < COLUMNS; i++) {
      let move = columnOrder[i]
      const newBoard = makeTempMove(slots, move, SECOND_PLAYER);
      if (newBoard) {
        const score = minimax(newBoard, MAX_DEPTH, -Infinity, Infinity, false); // Adjust depth as needed
        console.log(`Move: ${move} Score: ${score}`)
        if (score > bestScore) {
          bestScore = score;
          bestMove = move;
        }
      }
    }
  
    if (bestMove !== null) {
      makeMove(bestMove, SECOND_PLAYER);
    }
  };

  const makeMove = (move, player) => {
    const newBoard = slots.map((row) => [...row]);
    const newSlots = newBoard[move];
    for (let i = ROWS - 1; i >= 0; i--) {
      if (newSlots[i] === null) {
        newSlots[i] = player;
        setSlots(newBoard)
        setWinner(checkWin(newBoard))
        setPlayerMove(playerMove === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER)
        break
      }
    }
  }

  const handleClick = (i) => {
    if (!winner) {
      const newSlots = slots.map((row) => [...row]);
      for (let j = ROWS - 1; j >= 0; j--) {
        if (newSlots[i][j] === null) {
          newSlots[i][j] = playerMove;
          setSlots(newSlots);
          setPlayerMove(playerMove === FIRST_PLAYER ? SECOND_PLAYER : FIRST_PLAYER);
          setWinner(checkWin(newSlots));
          break;
        }
      }
    }
  };

  const handleResetClick = () => {
    setSlots(
      Array(COLUMNS)
        .fill(null)
        .map(() => Array(ROWS).fill(null))
    );
    setPlayerMove(FIRST_PLAYER);
    setWinner(null);
  };

  return (
    <div className="flex justify-items-center items-center gap-4 mt-8 ml-8 mr-8 grid auto-rows-auto">
      <TurnIndicator turn={playerMove} />
      <div className="grid grid-cols-7 md:w-140 md:h-120">
        {slots.map((_, i) => (
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
