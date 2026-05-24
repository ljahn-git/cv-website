'use client'
import MainWindow from "../components/MainWindow";
import LeftNavButton from "../components/LeftNavButton";
import RightNavButton from "../components/RightNavButton";
import BottomNavButton from "../components/BottomNavButton";

import { useState, useEffect } from "react";

export default function Home() { /* Render format of page here, update state variable which selects which component to render based on button pressed */
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log("Current page: " + currentPage);
  }, [currentPage])

  return (
    <main>
      <MainWindow />
      <LeftNavButton onClick={() => setCurrentPage(1)}/>
      <RightNavButton />
      <BottomNavButton />
    </main>
    
  );
}
