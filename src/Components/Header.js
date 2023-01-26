import { useEffect, useState } from "react";
import "../styles/index.css";

const Header = () => {
  const [theme, setTheme] = useState("");
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // Dark mode

  return (
    <header className={`site-header p-3 shadow-sm ${theme}`}>
      <div className="spinner">
        <div className="loading"></div>
      </div>
      <div className="container w-100">
        <h1 className="visually-hidden">Where in the world</h1>
        <div className="site-header__inner d-flex align-items-center justify-content-between">
          <h2 className={`h5 m-0 ${theme ? "text-light" : "text-dark"}`}>
            <i className="fa-solid fa-earth-asia"></i> World in your hand!
          </h2>
          <div className="dark-mode">
            <button
              onClick={handleTheme}
              className={`border-0 bg-transparent ${
                theme ? "text-light" : "text-dark"
              }`}
            >
              <em className="fa-regular fa-moon"></em>
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
