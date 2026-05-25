import Image from "next/image";

export default function HomeContent() {
    return(
        // <p>Home test test</p>
        <div className=" h-full grid grid-cols-[25%_75%] gap-4">
            <div className="min-h-full grid grid-rows-[50%_50%] gap-4">
                <div className="flex justify-center">
                    <Image className="h-full w-auto"
                            src="/images/headshot.png"
                            height={144}
                            width={144}
                            alt="Headshot of Leo Jahn"/>  
                </div>
                <div className="">
                    <ul>
                        <li>https://github.com/ltj05508</li>
                        <li>asdf</li>
                        <li>asdf</li>
                        <li>asdf</li>
                    </ul>
                </div>
            </div>
            <p>Home test test</p>

        </div>
    )
}