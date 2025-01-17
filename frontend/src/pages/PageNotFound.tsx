import { Frown } from "lucide-react";
import FollowSection from "../components/FollowSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function PageNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full text-center space-y-8 mx-auto p-10">
          <div className="flex justify-center">
            <Frown className="w-20 h-20 text-gray-400 animate-bounce dark:text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700 dark:text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find what you're looking for. Perhaps the page has
              moved or doesn't exist anymore.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <FollowSection />
        <Footer />
      </div>
    </div>
  );
}

export default PageNotFound;
