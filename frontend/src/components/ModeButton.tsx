import { useState, useEffect } from "react";

export const ModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className=" dark:bg-slate-900 text-black dark:text-white flex items-center justify-center  ">
      <label htmlFor="darkModeToggle" className="relative cursor-pointer">
        <input
          type="checkbox"
          id="darkModeToggle"
          className="sr-only peer"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
        />
        <div className="w-12 h-6 bg-gray-300 rounded-full  peer-checked:bg-gray-700 peer-focus:ring-2 peer-focus:ring-blue-500 transition"></div>
        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition"></div>
      </label>
    </div>
  );
};

export default ModeButton;
