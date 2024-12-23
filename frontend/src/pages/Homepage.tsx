import FollowSection from "../components/FollowSection.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import Project from "../components/Project.tsx";
import Navbar from "./../components/Navbar.tsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <FollowSection />
      <Footer/>
    </>
  );
}

export default HomePage;
