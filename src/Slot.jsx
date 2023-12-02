const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const Slot = ({ move, colIndex, rowIndex }) => {
    const slotStyle = [];
    const pieceStyle = [];
    if (colIndex === 0) {
        slotStyle.push('border-l-2');
    }
    if (rowIndex === 0) {
        slotStyle.push('border-t-2');
    }
    move === FIRST_PLAYER ? pieceStyle.push('bg-onyx') : move === SECOND_PLAYER ? pieceStyle.push('bg-lavender') : null
    return (
        <div className={`border-r-2 border-b-2 w-20 h-20 border-yellow-400 ${slotStyle.join(" ")}`}>
            <div className={`flex w-10 h-10 justify-self-center items-center ${pieceStyle.join(" ")}`}></div>
        </div>
    )
}

export default Slot