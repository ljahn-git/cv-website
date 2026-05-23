import MainWindow from "../components/MainWindow";
import LeftNavButton from "../components/LeftNavButton"

export default function Home() { /* Render format of page here, update state variable which selects which component to render based on button pressed */
  return (
    <main>
      <MainWindow />
      <LeftNavButton />
    </main>
    
  );
}
