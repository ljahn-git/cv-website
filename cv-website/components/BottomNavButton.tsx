'use client'
import {useState, useEffect} from 'react';

type BottomNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
};

export default function BottomNavButton({ currentPage, onClick }: BottomNavButtonProps) {
    return (
        <div>
        {currentPage == 0 ? <button onClick={onClick} className="absolute bottom-0 left-0 right-0 w-full h-12 flex p-1 items-center justify-center cursor-pointer hover:italic hover:border border-black">
            <p>&darr;</p> <p>E</p> <p>D</p> <p>U</p> <p>C</p> <p>A</p> <p>T</p> <p>I</p> <p>O</p> <p>N</p> <p>&darr;</p>
        </button> : <></>}
        </div>
    )
}