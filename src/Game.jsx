import Board from "./Board"
import Header from "./Header"

function Game() {

  return (
    <>
      <div className="min-h-screen bg-red-500">
        <Header />
        <Board />
      </div>
    </>
  )
}

export default Game
