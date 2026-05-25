type BottomNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
};

export default function BottomNavButton({ currentPage, onClick }: BottomNavButtonProps) {
    return (
        <div>
            {currentPage == 0 ? <button onClick={onClick} className="absolute bottom-0 left-0 right-0 w-full h-12 flex p-1 items-center justify-center cursor-pointer hover:bg-red-300 font-bold hover:italic hover:border-t-2 border-black">
                <p className="mx-1">&darr;</p> <p className="mx-1">E</p> <p className="mx-1">D</p> <p className="mx-1">U</p> <p className="mx-1">C</p> <p className="mx-1">A</p> <p className="mx-1">T</p> <p className="mx-1">I</p> <p className="mx-1">O</p> <p className="mx-1">N</p> <p className="mx-1">&darr;</p>
            </button> : <></>}
        </div>
    )
}