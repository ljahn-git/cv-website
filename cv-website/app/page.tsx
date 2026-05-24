import MainWindow from "../components/MainWindow";
import LeftNavButton from "../components/LeftNavButton";
import RightNavButton from "../components/RightNavButton";
import BottomNavButton from "../components/BottomNavButton";

export default function Home() { /* Render format of page here, update state variable which selects which component to render based on button pressed */
  return (
    <main>
      <MainWindow />
      <LeftNavButton />
      <RightNavButton />
      <BottomNavButton />
    </main>
    
  );
}
