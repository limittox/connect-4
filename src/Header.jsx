const Header = ({ onClick }) => {
    return (
        <div className="text-center text-yellow-400 md:text-[65px] text-[33px] font-light font-['Inter'] cursor-pointer" onClick={() => onClick(null)}>
            connect-4
        </div>
    )
}

export default Header