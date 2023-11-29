import Slot from "./Slot"

const Column = () => {
    return (
        <div className="w-20 h-120 grid-rows-6">
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
            <Slot />
        </div>
    )
}

export default Column