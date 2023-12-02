import Slot from "./Slot"

const Column = ({ colIndex, slots, playerMove, onClick }) => {
    return (
        <div className="w-20 h-120 grid-rows-6" onClick={onClick}>
            {slots[colIndex].map((row, i) => (
                <Slot key={i} rowIndex={i} colIndex={colIndex} move={row} />
            ))}
        </div>
    )
}

export default Column