import Layout from "@/components/layouts/Layout";
import FollowSection from "../components/sections/FollowSection";
import FooterSection from "../components/sections/FooterSection";
import NavbarSection from "../components/sections/NavbarSection";
import AboutSection from "@/components/sections/AboutSection";

function AboutPage() {
  return (
    <>
      <Layout>
        <NavbarSection />
        <AboutSection />
        <FollowSection />
        <FooterSection />
      </Layout>
    </>
  );
}

export default AboutPage;
