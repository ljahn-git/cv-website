type TopNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
};

export default function TopNavButton({ currentPage, onClick }: TopNavButtonProps) {
    return (
        <div>
        {currentPage == 2 ? <button onClick={onClick} className="absolute top-0 left-0 right-0 w-full h-12 flex p-1 items-center justify-center cursor-pointer hover:bg-gray-300 hover:italic hover:border-b-2 border-black">
            <p>&uarr;</p> <p className="mx-1">H</p> <p className="mx-1">O</p> <p className="mx-1">M</p> <p className="mx-1">E</p> <p className="mx-1">&uarr;</p>
        </button> : <></>}
        </div>
    )
}