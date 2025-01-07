import FollowSection from "../components/FollowSection.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import Project from "../components/Project.tsx";
import { BASE_URL } from "../config/env.ts";
import Navbar from "./../components/Navbar.tsx";
import { useEffect, useState } from "react";

function HomePage() {
  const [project, setProject] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL.concat("/api/v1/portfolios"), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const result = await response.json();
        let projectsData: Project[] = result.data.slice(0, 3);
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

  const img = "/assets/img/Iqbal Sonata.JPG";
  return (
    <>
      <Navbar />
      <Hero text="holla! I'm Iqbal" imgUrl={img} />
      <Project projects={project} error={error} isLoading={loading} />
      <FollowSection />
      <Footer />
    </>
  );
}

export default HomePage;
