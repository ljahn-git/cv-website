'use client'
import {useState, useEffect, MouseEventHandler} from 'react';

type LeftNavButtonProps = {
    currentPage: number
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function LeftNavButton({ currentPage, onClick }: LeftNavButtonProps) {
    return (
        <div>
            {currentPage == 0 ? <button onClick={onClick} className="absolute inset-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:italic hover:border border-black">
                <p>&lt;</p> <p>P</p> <p>R</p> <p>O</p> <p>J</p> <p>E</p> <p>C</p> <p>T</p> <p>S</p> <p>&lt;</p>
            </button> : 
                currentPage == 3 ? <button onClick={onClick} className="absolute inset-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:italic hover:border border-black">
                <p>&lt;</p> <p>H</p> <p>O</p> <p>M</p> <p>E</p> <p>&lt;</p>
            </button> : <></>}
        </div>
    )
}