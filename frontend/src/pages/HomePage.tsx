import FollowSection from "../components/FollowSection.tsx";
import Footer from "../components/Footer.tsx";
import Hero from "../components/Hero.tsx";
import Project from "../components/Project.tsx";
import Navbar from "./../components/Navbar.tsx";

function HomePage() {
  const img = "/assets/img/Iqbal Sonata.JPG";
  return (
    <>
      <Navbar />
      <Hero text="holla! I'm Iqbal" imgUrl={img}/>
      <Project />
      <FollowSection />
      <Footer/>
    </>
  );
}

export default HomePage;
