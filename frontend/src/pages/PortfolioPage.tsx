import FooterSection from "@/components/FooterSection";
import Layout from "@/components/layouts/Layout";
import NavbarSection from "@/components/NavbarSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function PortfolioPage() {
    return (
        <>
            <Layout>
                <NavbarSection />
                <main className="flex-1">
                    <PortfolioSection />
                </main>
                <FooterSection />
            </Layout>
        </>
    );
}