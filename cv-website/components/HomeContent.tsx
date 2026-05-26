import Image from "next/image";
import Link from "next/link";
import "@/css-animations.css";

export default function HomeContent() {
    return(
        // <p>Home test test</p>
        <div className=" h-full grid grid-cols-[25%_75%] gap-4">
            <div className="min-h-full grid grid-rows-[50%_50%] gap-4">
                <div className="flex justify-center">
                    <Image className="h-auto w-auto border rounded-4xl"
                            src="/images/headshot.png"
                            height={144}
                            width={144}
                            alt="Headshot of Leo Jahn"/>  
                </div>
                <div className="flex justify-center items-center underline text-xl">
                    <ul className="list-disc">
                        <li><Link target="_blank" href="https://github.com/ltj05508">GitHub 1</Link></li>
                        <li><Link target="_blank" href="https://github.com/ljahn-git">GitHub 2</Link></li>
                        <li><Link target="_blank" href="https://www.linkedin.com/in/leo-jahn/">LinkedIn</Link></li>
                        <li><Link target="_blank" href="https://app.joinhandshake.com/profiles/bzarhj">Handshake</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col text-xl">
                <div className="flex">
                    <p className="inline">My name is </p> <h1 className="inline italic text-9xl">Leo Jahn</h1>
                </div>
                <p>and I'm a 22 year old programmer/developer based out of Athens, Georgia.</p> <br/>
                <p>I enjoy working on a little bit of everything, from React websites (like this one!), video games in Unity, and relational and document-oriented
                    databases. Specifically, I'd define my skills like this:
                </p>
                <br/>

                <p>Frontend:</p>
                <ul className="list-disc">
                    <li className="ml-8">HTML, CSS, Javascript (React)</li>
                </ul>
                <p>Backend:</p>
                <ul className="list-disc">
                    <li className="ml-8">Java, C/C++/C#, Python</li>
                </ul>
                <p>Database:</p>
                <ul className="list-disc">
                    <li className="ml-8">SQL, MongoDB</li>
                </ul>

                <br/>
                <p>I'm always open to opportunities, so feel free to reach out!</p>

            </div>

        </div>
    )
}