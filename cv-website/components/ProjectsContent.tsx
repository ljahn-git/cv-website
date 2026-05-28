import ProjectCard from "../components/ProjectCard";

export default function ProjectsContent() {
    return(
        // <p>Projects test test</p>
        <div className="grid grid-cols-6 h-full gap-2">
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
            <ProjectCard image1="/images/Proj-JCW-Home.png" image1W={2716} image1H={1490} image2="/images/Proj-JCW-FAQ.png" image2W={1} image2H={1} image3="/images/Proj-JCW-Calendar.png" image3W={1} image3H={1} title="Jasper County Elections Website" description="Temp description"/>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}