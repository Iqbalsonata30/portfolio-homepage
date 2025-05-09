import Layout from "@/components/layouts/Layout.tsx";
import NavbarSection from "../components/NavbarSection.tsx";
import PortfolioSection from "@/components/PortfolioSection.tsx";
import FollowSection from "@/components/FollowSection.tsx";
import HeroSection from "@/components/HeroSection.tsx";
import FooterSection from "@/components/FooterSection.tsx";

function HomePage() {
  return (
    <>
      <Layout>
        <NavbarSection />
        <HeroSection />
        <PortfolioSection />
        <FollowSection />
        <FooterSection />
      </Layout>
    </>
  );
}

export default HomePage;
