const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

import reset from "./assets/reset.svg";
const WinnerIndicator = ({ onClick, winner }) => {
  return (
    <div
      className="grid grid-cols-[max-content_1fr] text-yellow-400 text-2xl font-normal font-[Inter] cursor-pointer"
      onClick={onClick}
    >
      {winner === "Draw" ? (
        <div>Game is a draw</div>
      ) : (
        <div className="flex items-center">
          {winner === FIRST_PLAYER ? (
            <div className={`w-7 h-7 rounded-full bg-onyx`}></div>
          ) : (
            <div className={`w-7 h-7 rounded-full bg-lavender`}></div>
          )}
          <div className="ml-2">is the winner!</div>
        </div>
      )}
      <div className="flex items-center justify-center ml-2">
        <img src={reset} alt="reset" />
      </div>
    </div>
  );
};

export default WinnerIndicator;
