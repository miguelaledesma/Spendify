import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import SignUpForm from "./components/Sign-Up-Form";

function App() {
  const [isDarkMode, setDarkMode] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode("light");
    }
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Homepage isDarkMode={isDarkMode} setDarkMode={setDarkMode} />}
      />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
