import React, { useState } from "react";
import Board from "./Board";
import Header from "./Header";
import PlayerSelector from "./PlayerSelector";

function Game() {
  const [playMode, setPlayMode] = useState(null);

  const handleClick = (selectedPlayMode) => {
    setPlayMode(selectedPlayMode);
  };

  return (
    <>
      <div className="min-h-screen bg-red-500">
        <Header onClick={() => handleClick(null)}/>
        {playMode === null ? (
          <PlayerSelector
            onClick={(selectedPlayMode) => handleClick(selectedPlayMode)}
          />
        ) : (
          <Board playMode={playMode} />
        )}
      </div>
    </>
  );
}

export default Game;
