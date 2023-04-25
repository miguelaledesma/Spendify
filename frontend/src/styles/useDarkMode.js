const DarkModeTheme = ({ isDarkMode, setDarkMode }) => {
  const handleTheme = () => {
    if (isDarkMode === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(isDarkMode === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed top-4 right-4 inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="toggle"
        checked={isDarkMode === "dark"}
        onChange={handleTheme}
      />
    </div>
  );
};

export default DarkModeTheme;
