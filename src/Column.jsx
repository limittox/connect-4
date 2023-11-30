import Slot from "./Slot"

const Column = ({ colIndex, slots, setSlots, playerMove, onClick }) => {
    return (
        <div className="w-20 h-120 grid-rows-6" onClick={onClick}>
            {slots[colIndex].map((row, i) => (
                <Slot key={i} move={row} />
            ))}
        </div>
    )
}

export default Column