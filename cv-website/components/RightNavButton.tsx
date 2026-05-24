'use client'
import {useState, useEffect} from 'react';

export default function RightNavButton() {
    const [click, setClick] = useState(false);
    
    useEffect(() => {
        console.log("Right click!");
    }, [click]);
    
    return (
        <button onClick={() => setClick(!click)} className="absolute top-0 bottom-0 right-0 w-12 flex flex-col p-1 items-center justify-center cursor-pointer hover:italic hover:border border-black">
            <p>&gt;</p>
            <p>E</p>
            <p>X</p>
            <p>P</p>
            <p>E</p>
            <p>R</p>
            <p>I</p>
            <p>E</p>
            <p>N</p>
            <p>C</p>
            <p>E</p>
            <p>S</p>
            <p>&gt;</p>
        </button>
    )
}