import { BriefcaseBusiness, Mouse, Plus } from "lucide-react"
import { Button } from "./ui/button"

interface Project {
    id: number,
    title: string,
    techStack: string,
    description: string,
    projectUrl?: string,
    imageUrl: string,
}


const sampleProjects: Project[] = [
    {
        id: 1,
        title: "Title 1",
        techStack: "React,Typescript",
        description: "Project 1 descriptionasdaadsadadadasdasdkasdkasdasjdajdasjdasjdjasdaskfcasclakscnaknca asd ak malkdmal mdalm ladl a",
        imageUrl: "img/test.jpg",
        projectUrl: "github.com"
    },
    {
        id: 2,
        title: "Title 2",
        techStack: "React,SQLite",
        description: "Project 2 description",
        imageUrl: "/assets/img/astronaut.png",
        projectUrl: "github.com"
    },
    {
        id: 3,
        title: "Title 2",
        techStack: "React,SQLite",
        description: "Project 2 description",
        imageUrl: "/assets/img/astronaut.png",
        projectUrl: "github.com"
    }
]

export default function PortfolioSection() {
    const portfolioIcon = "/assets/img/astronaut.png"
    return (
        <>
            <section className="bg-white p-4 border-black border-t-2 flex flex-col gap-5 items-center justify-center w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                    {sampleProjects.map((project) => (
                        <div
                            key={project.id}
                            className="border-2 border-black rounded-sm shadow-md flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-[#5ad1cd] relative h-20 border-b-2 border-black flex items-center justify-center">
                                <div className="absolute top-1 left-1 w-5 h-5 border-2 border-black rounded-full bg-white flex items-center justify-center text-black font-bold text-xs cursor-pointer">
                                    <Plus />
                                </div>
                                <img alt="icon" className="w-6 h-6" src={portfolioIcon} />
                            </div>

                            {/* Body with fixed structure */}
                            <div className="flex flex-col justify-between flex-1 p-3">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">{project.title}</h3>
                                    <p className="text-xs text-gray-500 italic break-words">{project.techStack}</p>
                                    <p className="text-sm text-gray-700 break-words">{project.description}</p>
                                </div>

                                {/* Button always at the bottom */}
                                {project.projectUrl && (
                                    <div className="mt-4">
                                        <Button variant="neutral" asChild className="cursor-pointer w-full">
                                            <a href={project.projectUrl}>
                                                <Mouse />
                                                Go there
                                            </a>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="max-w-36 mx-auto" asChild>
                    <a href="/portfolio">
                        <BriefcaseBusiness />
                        See Portfolio
                    </a>
                </Button>
            </section>
        </>
    )
}



