const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const TurnIndicator = ({ turn }) => {
    return (
      <div className="flex items-center justify-center w-[70px] h-[30px] md:w-[140px] md:h-[60px] bg-yellow-400 rounded-[10px] mb-5">
        <div className="text-red-500 md:text-2xl text-sm font-normal font-[Inter] mr-4">
          Turn 
        </div>
        {turn === FIRST_PLAYER ? <div className="w-5 h-5 md:w-10 md:h-10 bg-onyx rounded-[10px]"></div> : <div className="w-5 h-5 md:w-10 md:h-10 bg-lavender rounded-[10px]"></div>}
      </div>
    );
  };
  
  export default TurnIndicator;
  