import { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const applyTheme = (theme) => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("selected-theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // mặc định là sáng
      setTheme("light");
      applyTheme("light");
      localStorage.setItem("selected-theme", "light");
    }
  }, []);

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById("header");
      if (!header) return;
      if (window.scrollY >= 50) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  return (
    <header id="header" className="header">
      <div className="container grid header__container">
        <a href="#" className="nav-logo" onClick={() => navigate("/")}>
          MINH TINH
        </a>
        <div className="flex items-center justify-between">
          <Button
            style={{ backgroundColor: "#606EBE" }}
            type="primary"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </Button>
          <Button className="mx-2 button-signup" onClick={() => navigate("/register")}>
            Sign up
          </Button>
          {theme === "light" ? (
            <BiMoon className="change-theme" id="theme-button" onClick={toggleTheme} />
          ) : (
            <BiSun className="change-theme" id="theme-button" onClick={toggleTheme} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
