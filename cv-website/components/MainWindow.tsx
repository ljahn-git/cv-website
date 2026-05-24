import HomeContent from "../components/HomeContent";
import ProjectsContent from "../components/ProjectsContent";
import EducationContent from "../components/EducationContent";
import ExperiencesContent from "../components/ExperiencesContent";

type MainWindowProps = {
    currentPage: number;
}
export default function MainWindow({ currentPage }: MainWindowProps) {
    return(
        <div className="flex h-screen justify-center items-center">
            <div className="w-4/5 h-4/5 m-8 px-8 py-16 border border-8 rounded-4xl border-black">
            {currentPage == 0 ? <HomeContent /> : 
                currentPage == 1 ? <ProjectsContent /> : 
                    currentPage == 2 ? <EducationContent /> : 
                        currentPage == 3 ? <ExperiencesContent/> : <></>}
            </div>
        </div>
    )
}