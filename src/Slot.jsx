import { useEffect, useState } from "react";

const FIRST_PLAYER = "X";
const SECOND_PLAYER = "O";

const Slot = ({ move, colIndex, rowIndex }) => {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (move) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 300); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [move]);

    const slotStyle = ['flex', 'justify-center', 'items-center'];
    const pieceStyle = ['transform transition duration-300 ease-in-out infinite'];
    if (colIndex === 0) {
        slotStyle.push('border-l-2');
    }
    if (rowIndex === 0) {
        slotStyle.push('border-t-2');
    }
    move === FIRST_PLAYER ? pieceStyle.push('bg-onyx') : move === SECOND_PLAYER ? pieceStyle.push('bg-lavender') : null

    if (isAnimating) {
        pieceStyle.push('scale-150 ease-in-out infinite alternate');
    }

    return (
        <div className={`border-r-2 border-b-2 md:w-20 md:h-20 w-10 h-10 border-yellow-400 ${slotStyle.join(" ")}`}>
            <div className={`md:w-10 md:h-10 w-5 h-5 rounded-full ${pieceStyle.join(" ")}`}></div>
        </div>
    )
}

export default Slot