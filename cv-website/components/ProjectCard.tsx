import Image from "next/image";

type ProjectCardTypes = {
    image1: string;
    image1W: number;
    image1H: number;
    image2: string;
    image2W: number;
    image2H: number;
    image3: string;
    image3W: number;
    image3H: number;
    title: string;
    description: string;
}

export default function ProjectCard({image1, image1H, image1W, image2, image2W, image2H, image3, image3W, image3H, title, description}: ProjectCardTypes) {
    return(
        <button className="flex flex-col overflow-hidden h-full w-full border border-4 rounded-4xl border-red-300 bg-black cursor-pointer shadow-lg">
            <div className="flex flex-col h-full w-full bg-red-500 overflow-hidden justify-center border-b-4 border-red-300">
                {/* <p>Projects Card 1</p>
                <p>2-3 images that are cut off by the border. Card scales a bit when hovered over.</p> */}
                <Image className="object-cover h-full w-full"
                            src={image1}
                            height={image1H}
                            width={image1W}
                            alt="Project Image"/> 
                {/* <Image className="object-cover h-ful w-full"
                            src="/images/Proj-JCW-FAQ.png"
                            height={2714}
                            width={1530}
                            alt="Headshot of Leo Jahn"/>   */}
            </div>
            <div className="flex h-1/6 w-full bg-white">
            <p className="p-2 font-bold">{title}</p>
            </div>
        </button>
    )
}