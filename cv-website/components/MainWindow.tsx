import HomeContent from "../components/HomeContent";
import ProjectsContent from "../components/ProjectsContent";
import EducationContent from "../components/EducationContent";
import ExperiencesContent from "../components/ExperiencesContent";
import ShadowMainWindow from "@/components/ShadowMainWindow";
import "@/css-animations.css";

type MainWindowProps = {
    currentPage: number;
}
export default function MainWindow({ currentPage }: MainWindowProps) {
    return(
        <div className="relative flex h-screen justify-center items-center bg-red-400">
            <div className="z-10 animate-move-up w-4/5 h-4/5 m-8 px-8 py-16 bg-white border border-8 rounded-4xl border-gray-500">
            {currentPage == 0 ? <HomeContent /> : 
                currentPage == 1 ? <ProjectsContent /> : 
                    currentPage == 2 ? <EducationContent /> : 
                        currentPage == 3 ? <ExperiencesContent/> : <></>}
                
            </div>
            <ShadowMainWindow />
            
            
        </div>
    )
}