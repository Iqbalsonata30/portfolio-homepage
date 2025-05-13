import { BriefcaseBusiness, Mouse, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { useLocation, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

export interface Portfolio {
    id: number,
    title: string,
    techStack: string,
    description: string,
    projectUrl?: string,
    imageUrl: string,
}

type PortfolioProps = {
    projects: Portfolio[];
    error: string | null;
}

export default function PortfolioSection({ projects, error }: PortfolioProps) {
    const path = useLocation().pathname;
    const [searchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get("page") || "1", 10)
    const itemsPerPage = path === "/" ? 3 : 6

    const totalPages = Math.ceil(projects.length / itemsPerPage);


    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const paginatedProjects = projects.slice(startIndex, endIndex)


    const portfolioIcon = "/assets/img/astronaut.png"
    return (
        <>
            <section className="bg-white p-4 border-black border-t-2 flex flex-col gap-5 items-center justify-center w-full">
                {error && <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>Something went wrong!</AlertTitle>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Alert>}




                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                    {!error && paginatedProjects.map((project) => (
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
                                    <p className="text-xs text-gray-500 italic break-words capitalize">{project.techStack}</p>
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

                {(path === "/" && !error) &&
                    <Button className="max-w-36 mx-auto" asChild>
                        <Link to="/portfolio">
                            <BriefcaseBusiness />
                            See Portfolio
                        </Link>
                    </Button>
                }


                {(path === "/portfolio" && !error) &&
                    <Pagination>
                        <PaginationContent>
                            {currentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious href={`/portfolio?page=${currentPage - 1}`} />
                                </PaginationItem>
                            )}

                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href={`/portfolio?page=${page}`}
                                            isActive={page === currentPage}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })}

                            {currentPage < totalPages && (
                                <PaginationItem>
                                    <PaginationNext href={`/portfolio?page=${currentPage + 1}`} />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                }
            </section>
        </>
    )
}



