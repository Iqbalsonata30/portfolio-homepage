import Layout from "@/components/layouts/Layout.tsx";
import NavbarSection from "../components/sections/NavbarSection.tsx";
import PortfolioSection, { Portfolio } from "@/components/sections/PortfolioSection.tsx";
import FollowSection from "@/components/sections/FollowSection.tsx";
import HeroSection from "@/components/sections/HeroSection.tsx";
import FooterSection from "@/components/sections/FooterSection.tsx";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/config/env.ts";

function HomePage() {
  const [project, setProject] = useState<Portfolio[]>([]);
  const [error, setError] = useState<string | null>(null);

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
        let projectsData: Portfolio[] = result.data;
        setProject(projectsData);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("an unknown error occured");
        }
        setProject([]);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Layout>
        <NavbarSection />
        <HeroSection />
        <PortfolioSection projects={project} error={error} />
        <FollowSection />
        <FooterSection />
      </Layout>
    </>
  );
}

export default HomePage;
