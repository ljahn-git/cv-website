import ProjectCard from "../components/ProjectCard";

export default function ProjectsContent() {
    return(
        // <p>Projects test test</p>
        <div className="grid grid-cols-6 h-full">
            {/* <div className="grid grid-rows-2 h-full">
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="grid grid-rows-2">
                <ProjectCard />
            </div>
            <div className="grid grid-rows-2">
                <ProjectCard />
            </div> */}
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}