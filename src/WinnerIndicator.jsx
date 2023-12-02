import reset from './assets/reset.svg';
const WinnerIndicator = ({onClick, winner}) => {
    return (
      <div className="grid grid-cols-[max-content_1fr] text-yellow-400 text-2xl font-normal font-[Inter] cursor-pointer" onClick={onClick}>
        {winner === "Draw" ? <div>Game is a draw</div> : <div>{winner} is the winner!</div>}
        <div className="flex items-center justify-center ml-2">
          <img src={reset} alt="reset" />
        </div>
      </div>
    );
  };
  
  export default WinnerIndicator;
  