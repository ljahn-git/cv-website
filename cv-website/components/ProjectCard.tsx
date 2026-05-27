export default function ProjectCard() {
    return(
        <div className="flex flex-col p-4 h-full w-full border border-4 rounded-4xl border-red-300 bg-black">
            <div className="flex h-full w-full bg-red-500">
                <p>Projects Card 1</p>
            </div>
            <div className="flex h-1/6 w-full bg-black">
            <p>Projects Card 2</p>
            </div>
        </div>
    )
}