import React from "react";
import DarkModeTheme from "../../styles/useDarkMode";
import { Link, useNavigate } from "react-router-dom";
import FooterNav from "../Footer";
import LandingContent from "./LandingContent";
import WaitingList from "./WaitingList";
const Homepage = ({ isDarkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleButtonClick = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  const backgroundImageStyle = {
    backgroundSize: "cover",
    backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
  };

  return (
    <div className="App dark:bg-gray-900 transition duration-300 ease dark:focus:bg-white dark:focus:border-white dark:text-white dark:focus:text-black">
      <div className="navbar fixed">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isDarkMode === "dark" ? "bg-gray-900" : "bg-slate-600"
          }`}
        >
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </div>
        <a
          href="/"
          src=""
          className="btn btn-ghost normal-case text-xl dark:text-white"
        >
          Spendify
        </a>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImageStyle,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
            <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl dark:text-white">
              <span class="inline md:block">
                Take Control of Your Finances,
              </span>{" "}
              <span class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
                Effortlessly.
              </span>
            </h1>
            <div class="mx-auto mt-4 sm:mt-8 md:mt-12 lg:mt-12 text-gray-500 md:max-w-lg md:text-center lg:text-lg">
              Say goodbye to spreadsheet headaches and hello to effortless
              expense tracking
            </div>

            <Link to={token ? "/dashboard" : "/login"}>
              <button
                className="btn btn-primary px-8 py-4 mt-12"
                onClick={handleButtonClick}
              >
                <span className="relative z-10 text-white">
                  {token ? "Dashboard" : "Get Started"}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <div class="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-3 lg:px-0 sm:text-center">
          <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-white">
            Track your expenses like a Pro
          </p>
        </div>

        <LandingContent />
        <WaitingList />
      </div>
      <DarkModeTheme isDarkMode={isDarkMode} setDarkMode={setDarkMode} />

      <FooterNav />
    </div>
  );
};

export default Homepage;
