import onePlayer from "./assets/one-player.svg";
import twoPlayers from "./assets/two-players.svg";

const PlayerSelector = ({ onClick }) => {
    return (
      <div className="grid grid-rows-[max-content_1fr] text-center gap-4 mt-8 ml-8 mr-8 justify-items-center items-center">
        <div
          className="flex items-center justify-center w-[175px] h-[50px] bg-yellow-400 rounded-[10px] mb-5 cursor-pointer"
          onClick={() => onClick("singlePlayer")}
        >
          <div>
            <img src={onePlayer} alt="one player" />
          </div>
          <div className="text-red-500 text-2xl font-normal font-[Inter]">
            One Player
          </div>
        </div>
        <div
          className="flex items-center justify-center w-[175px] h-[50px] bg-yellow-400 rounded-[10px] mb-5 cursor-pointer"
          onClick={() => onClick("multiPlayer")}
        >
          <div>
            <img src={twoPlayers} alt="two players" />
          </div>
          <div className="text-red-500 text-2xl font-normal font-[Inter]">
            Two Player
          </div>
        </div>
      </div>
    );
  };
  
  export default PlayerSelector;
  