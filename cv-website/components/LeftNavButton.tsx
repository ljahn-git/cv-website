'use client'
import {useState, useEffect, MouseEventHandler} from 'react';

type LeftNavButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function LeftNavButton({ onClick }: LeftNavButtonProps) {
    return (
        <button onClick={onClick} className="absolute inset-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:italic hover:border border-black">
            <p>&lt;</p>
            <p>P</p>
            <p>R</p>
            <p>O</p>
            <p>J</p>
            <p>E</p>
            <p>C</p>
            <p>T</p>
            <p>S</p>
            <p>&lt;</p>
        </button>
    )
}