const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const TurnIndicator = ({ turn }) => {
    return (
      <div className="flex items-center justify-center w-[140px] h-[60px] bg-yellow-400 rounded-[10px] mb-5">
        <div className="text-red-500 text-2xl font-normal font-[Inter] mr-4">
          Turn 
        </div>
        {turn === FIRST_PLAYER ? <div class="w-10 h-10 bg-onyx rounded-[10px]"></div> : <div class="w-10 h-10 bg-lavender rounded-[10px]"></div>}
      </div>
    );
  };
  
  export default TurnIndicator;
  