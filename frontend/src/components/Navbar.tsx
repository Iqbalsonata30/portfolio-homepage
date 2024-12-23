import { ModeButton } from "./ModeButton.tsx";
import { useState } from "react";

function Navbar() {
  const name = "Iqbal Sonata";
  const logo = "/assets/img/astronaut.png";
  const path = window.location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`${isOpen ? "hidden" : "sticky"} top-0 z-50 bg-white/30 backdrop-filter backdrop-blur-md dark:bg-slate-900 shadow-xl `}
      >
        <nav className="flex justify-between items-center p-2.5 mx-1 md:mx-10 font-sans">
          <div className="flex items-center">
            <img src={logo} alt={name} className="max-w-16" />
            <a
              href="/"
              className="capitalize text-black dark:text-white tracking-wide text-xl md:text-2xl font-bold"
            >
              {name}
            </a>
          </div>

          <div className="flex items-center justify-end md:gap-3">
            <ModeButton />

            <button
              onClick={toggleMenu}
              className="block md:hidden z-50 cursor-pointer px-4 py-2 text-gray-800"
            ></button>

            <div className="hidden md:block">
              <ul className="flex items-center text-black gap-4 font-medium">
                {["Home", "About", "Portfolio"].map((item, index) => {
                  const itemPath =
                    item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <li key={index}>
                      <a
                        href={itemPath}
                        className={
                          path === itemPath
                            ? "text-black dark:text-white border-b-2 border-cyan-600 pb-2"
                            : "text-black dark:text-white hover:border-b-2 hover:border-gray-300 pb-2"
                        }
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 backdrop-filter backdrop-blur-md flex justify-center items-center shadow-lg transform duration-300 ease-in-out translate-y-[-100%] opacity-0 animate-pull-down">
          <div className="w-10/12 p-6 bg-white rounded-lg shadow-lg dark:bg-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {name}
              </h2>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-slate-100"
              >
                &#10005;
              </button>
            </div>
            <hr />

            <ul className="space-y-2 text-lg mt-2">
              {["Home", "About", "Portfolio"].map((item, index) => (
                <li key={index} className="text-start text-sm">
                  <a
                    href={`${item === "Home" ? "/" : "/".concat(item.toLowerCase())}`}
                    className="block text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-gray-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
