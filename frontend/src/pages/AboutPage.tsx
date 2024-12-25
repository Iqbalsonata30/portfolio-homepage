import Description from "../components/Description";
import FollowSection from "../components/FollowSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Navbar />
      <Description />
      <FollowSection />
      <Footer />
    </div>
  );
}

export default AboutPage;
