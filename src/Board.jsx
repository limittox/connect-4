import { useState } from 'react';
import Column from "./Column";

const ROWS = 6;
const COLUMNS = 7;

const Board = () => {
  const [slots, setSlots] = useState(Array(COLUMNS).fill(null).map(() => Array(ROWS).fill(null)));
  console.log(slots)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-7 w-140 h-120">
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default Board;
