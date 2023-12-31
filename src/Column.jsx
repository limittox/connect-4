import Slot from "./Slot"

const Column = ({ colIndex, slots, onClick }) => {
    return (
        <div className="md:w-20 md:h-120 w-10 h-120 grid-rows-6" onClick={onClick}>
            {slots[colIndex].map((row, i) => (
                <Slot key={i} rowIndex={i} colIndex={colIndex} move={row} />
            ))}
        </div>
    )
}

export default Column