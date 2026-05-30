import Image from "next/image";

type ProjectModalTypes = {
    image: string,
    imageH: number,
    imageW: number
}

export default function ProjectImageModal({image, imageH, imageW }: ProjectModalTypes) {
    return(
        <dialog id={image} className="max-w-4/5 min-w-2/3 justify-center items-center m-auto border-4 rounded-2xl border-red-300">
            <div className="flex flex-col m-2">
                <div className="flex justify-end">
                    <button className="h-auto px-2 py-1 border-2 items-center cursor-pointer" commandfor={image} command="close">X</button>
                </div>
                <Image className="h-full w-full mt-2 border-2 border-black"
                    src={image}
                    height={imageH}
                    width={imageW}
                    alt="Project Image"/> 
            </div>
        </dialog>
    )
}