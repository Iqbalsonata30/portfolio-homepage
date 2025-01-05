import { AlertCircle, Loader2 } from "lucide-react";
import CardList from "./CardList.tsx";

export interface Project {
  id: number;
  title: string;
  techStack: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

type ProjectProps = {
  projects: Project[] | null;
  error: string | null;
  isLoading: boolean;
};

export const Project: React.FC<ProjectProps> = ({
  projects,
  error,
  isLoading,
}) => {
  return (
    <section className="flex flex-col py-10 bg-white dark:bg-slate-900">
      <div className="text-center max-w-lg mx-auto p-5 ">
        <h1 className="text-3xl font-extrabold font-mono text-zinc-800 dark:text-white  ">
          Portfolio
        </h1>
        <p className="my-4 font-poppins text-gray-600/85 dark:text-slate-50/90 text-md">
          Check out my portfolio to see the cool stuff I've worked on!
        </p>
        <hr className="h-1 my-2 bg-gray-300 border-0 rounded dark:bg-gray-400" />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-6 md:gap-4 my-5 w-10/12 md:w-full mx-auto md:max-w-7xl max-w-4xl">
        {isLoading && (
          <div className="col-span-full flex flex-col items-center justify-center min-h-[200px] gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-gray-600 dark:text-gray-400 animate-pulse">
              Loading amazing projects...
            </p>
          </div>
        )}
        {error && (
          <div className="col-span-full p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <p>Error: {error}</p>
            </div>
          </div>
        )}
        {projects &&
          projects.map((project) => (
            <CardList
              key={project.id}
              imgUrl={`/assets/img/${project.imageUrl}`}
              title={project.title}
              stack={project.techStack}
              description={project.description}
              projectUrl={project.projectUrl}
            />
          ))}{" "}
      </div>

      <a
        href="/portfolio"
        className="p-3 mx-auto rounded-lg bg-sky-100 shadow-sm text-gray-600 font-medium font-poppins hover:text-black"
      >
        See More
      </a>
    </section>
  );
};

export default Project;
