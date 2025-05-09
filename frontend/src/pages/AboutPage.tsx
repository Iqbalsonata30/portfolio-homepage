import Layout from "@/components/layouts/Layout";
import FollowSection from "../components/FollowSection";
import FooterSection from "../components/FooterSection";
import NavbarSection from "../components/NavbarSection";
import AboutSection from "@/components/AboutSection";

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
