import React from "react";
import DarkModeTheme from "../styles/useDarkMode";
import { Link, useNavigate } from "react-router-dom";
import FooterNav from "./Footer";
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
    // backgroundImage: `url("https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")`,
    backgroundSize: "cover",
    backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF",
  };

  return (
    <div className="App dark:bg-gray-900 transition duration-300 ease dark:focus:bg-white dark:focus:border-white dark:text-white dark:focus:text-black">
      <div className="navbar">
        <img src="/logo.png" alt="Logo" className="w-10 h-12 mr-2" />
        <a className="btn btn-ghost normal-case text-xl dark:text-white">
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
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black dark:text-white">
              Track Your Expenses like a Pro
            </h1>
            <p className="mb-5">Take control of your finances, effortlessly.</p>
            <p className="text-lg text-center mb-4">
              Say goodbye to spreadsheet headaches and hello to effortless
              expense tracking
            </p>

            <Link to={token ? "/dashboard" : "/login"}>
              <button className="btn btn-primary" onClick={handleButtonClick}>
                <span className="relative z-10">
                  {token ? "Dashboard" : "Get Started"}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 ">
        <div className="max-w-md mb-16 mx-auto">
          <h2 className="text-5xl dark:text-white">
            Track your expenses like a Pro
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600 dark:text-white">
          <div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">
              Tracking
            </h3>
            <p className="text-lg">
              Get real-time insights into your spending habits and take control
              of your finances. Our app provides detailed reports and analysis
              to help you make informed financial decisions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Effortless</h3>
            <p className="text-lg">
              Our app makes it easy to track your expenses and stay on top of
              your finances. With a simple and intuitive interface, you can
              easily add expenses, categorize them, and view detailed reports.
            </p>
          </div>
        </div>
      </div>
      <DarkModeTheme isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <FooterNav />
    </div>
  );
};

export default Homepage;
