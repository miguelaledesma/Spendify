import "./App.css";
import { useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignUpForm from "./components/Sign-Up-Form";
import DashboardMain from "./components/DashboardMain";
import LoginForm from "./components/LoginForm";

function App() {
  const [isDarkMode, setDarkMode] = useState("light");

  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     setDarkMode("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setDarkMode("light");
  //   }
  // }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Homepage isDarkMode={isDarkMode} setDarkMode={setDarkMode} />}
      />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<DashboardMain />} />
    </Routes>
  );
}

export default App;
