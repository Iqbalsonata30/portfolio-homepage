import FooterSection from "@/components/sections/FooterSection";
import Layout from "@/components/layouts/Layout";
import NavbarSection from "@/components/sections/NavbarSection";
import PortfolioSection, { Portfolio } from "@/components/sections/PortfolioSection";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config/env";



export default function PortfolioPage() {
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
                <main className="flex-1">
                    <PortfolioSection projects={project} error={error} />
                </main>
                <FooterSection />
            </Layout>
        </>
    );
}