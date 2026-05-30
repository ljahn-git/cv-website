import ProjectCard from "../components/ProjectCard";

export default function ProjectsContent() {
    return(
        // <p>Projects test test</p>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 h-full gap-2 ">
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
            <ProjectCard image1="/images/Proj-JCW-Home.png" image1W={2716} image1H={1490} image2="/images/Proj-JCW-FAQ.png" image2W={2714} image2H={1530} image3="/images/Proj-JCW-Calendar.png" image3W={2720} image3H={1538} title="Jasper County Elections Website" description="I was selected to update the current website of the Jasper County Elections and Registration Department. Utilizing HTML, CSS, and JavaScript I created a responsive, multi-page website that will provide information to thousands of residents of the county. Features include an interactive calendar for board meeting dates, a responsive FAQ section, and a responsive sidebar that formats itself for mobile view." description2="This project is currently waiting to be reviewed by the Jasper County Elections Board." description3=""/>
            <ProjectCard image1="/images/Proj-BB-Home.png" image1W={3024} image1H={1530} image2="/images/Proj-BB-Routing.png" image2W={3024} image2H={1520} image3="/images/Proj-BB-Map.png" image3W={3016} image3H={1532} title="Bus Boss Website" description="Temp description" description2="" description3=""/>
            <ProjectCard image1="/images/Proj-CES-CreateAccount.png" image1W={3022} image1H={1572} image2="/images/Proj-CES-Home.png" image2W={3024} image2H={1574} image3="/images/Proj-CES-Seats.png" image3W={3014} image3H={1570} title="Cinema E-Booking Website" description="Temp description" description2="" description3=""/>
            <ProjectCard image1="/images/Proj-Brain-OuterBrain.png" image1W={2056} image1H={936} image2="/images/Proj-Brain-InnerBrain.png" image2W={2058} image2H={934} image3="/images/Proj-Brain-WhiteMatter.png" image3W={2060} image3H={932} title="3D Brain Modeling" description="Temp description" description2="" description3=""/>
            <ProjectCard image1="/images/Proj-DO-Title.png" image1W={1702} image1H={954} image2="/images/Proj-DO-Enemies.png"  image2W={1702} image2H={960} image3="/images/Proj-DO-Map.png" image3W={1706} image3H={952} title="Decked Out" description="Temp description" description2="" description3=""/>
            <ProjectCard image1="/images/Proj-RF-Map.png" image1W={1520} image1H={850} image2="/images/Proj-RF-Battle.png" image2W={1514} image2H={846} image3="/images/Proj-RF-Event.png" image3W={1514} image3H={840} title="Royal Flush" description="Temp description" description2="" description3=""/>

            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
        </div>
    )
}