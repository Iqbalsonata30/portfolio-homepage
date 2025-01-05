import CardList from "../components/CardList";
import FollowSection from "../components/FollowSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Project from "../components/Project";
import { AlertCircle, Loader2 } from "lucide-react";

function Portfolio() {
  const [project, setProject] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/portfolios`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const result = await response.json();
        let projectsData: Project[] = result.data;
        setProject(projectsData);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("an unknown error occured");
        }
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <section className="flex flex-col py-5 bg-white dark:bg-slate-800">
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
          {loading && (
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

          {project &&
            project.map((p) => (
              <CardList
                key={p.id}
                imgUrl={`/assets/img/${p.imageUrl}`}
                title={p.title}
                stack={p.techStack}
                description={p.description}
                projectUrl={p.projectUrl}
              />
            ))}
        </div>
      </section>
      <FollowSection />
      <Footer />
    </div>
  );
}

export default Portfolio;
