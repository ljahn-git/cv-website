export default function EducationContent() {
    return(
        // <p>Education test test</p>
        <div className="h-full flex flex-col  text-xl">
            <div className="h-full grid grid-cols-[20%_80%] items-center gap-40">
                <div className="h-full flex flex-col text-center justify-center items-center font-bold">
                    <p>University of Georgia</p>
                    <p>2024-Present</p>
                </div>
                <ul className="list-disc">
                    <li>Bachelor of Science in Computer Science, Bachelor of Arts in Music</li>
                    <li>Presidential Scholar: Spring 2026</li>
                    <li>Dean's List: Fall 2024, Fall 2025</li>
                </ul>
            </div>
            <div className="h-full grid grid-cols-[20%_80%] break-all items-center gap-40">
                <div className="h-full flex flex-col flex-nowrap text-center justify-center items-center font-bold">
                    <p>Kennesaw State University</p>
                    <p>2022-2024</p>
                </div>
                <ul className="flex flex-col flex-wrap list-disc">
                    <li>Bachelor of Science in Computer Science, Bachelor of Arts in Music Performance</li>
                    <li>Presidential Scholar: Fall 2022, Spring 2023</li>
                    <li>Dean's List: Fall 2023, Spring 2024</li>
                    <p>Bachelor of Science in Computer Science, Bachelor of Arts in Music Performance</p>
                </ul>
                {/* <p>Bachelor of Science in Computer Science, Bachelor of Arts in Music Performance</p> */}
            </div>

        </div>
    )
}