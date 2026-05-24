'use client'
import {useState, useEffect} from 'react';

type TopNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
};

export default function TopNavButton({ currentPage, onClick }: TopNavButtonProps) {
    return (
        <div>
        {currentPage == 2 ? <button onClick={onClick} className="absolute top-0 left-0 right-0 w-full h-12 flex p-1 items-center justify-center cursor-pointer hover:italic hover:border border-black">
            <p>&uarr;</p> <p>H</p> <p>O</p> <p>M</p> <p>E</p> <p>&uarr;</p>
        </button> : <></>}
        </div>
    )
}