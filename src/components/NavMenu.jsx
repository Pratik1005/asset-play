import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useTheme, useMobileMenu} from "../context";

const getActiveStyle = ({isActive}) =>
  isActive ? {backgroundColor: "var(--menu-hover)"} : null;

const NavMenu = () => {
  const {theme, setTheme} = useTheme();
  const {mobileMenuToggle, setMobileMenuToggle} = useMobileMenu();

  useEffect(() => {
    localStorage.setItem("themeState", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  };
  return (
    <aside className={`pd-sm ${mobileMenuToggle ? "show-menu" : ""}`}>
      <div className="flex-center">
        <h1 className="logo pd-bottom-md">AssetPlay</h1>
        <span
          className="material-icons mobile-menu-close cursor-pointer"
          onClick={() => setMobileMenuToggle((prev) => !prev)}
        >
          close
        </span>
      </div>
      <nav className="side-menu">
        <NavLink style={getActiveStyle} className="menu-link" to="/">
          <span className="material-icons">home</span> Home
        </NavLink>
        <NavLink to="/search" style={getActiveStyle} className="menu-link">
          <span className="material-icons">search</span> Search
        </NavLink>
        <NavLink to="/playlist" style={getActiveStyle} className="menu-link">
          <span className="material-icons">video_library</span>
          Playlist
        </NavLink>
        <NavLink to="/likedvideos" style={getActiveStyle} className="menu-link">
          <span className="material-icons">thumb_up</span> Liked videos
        </NavLink>
        <NavLink to="/history" style={getActiveStyle} className="menu-link">
          <span className="material-icons">history</span> History
        </NavLink>
        <NavLink to="/watchlater" style={getActiveStyle} className="menu-link">
          <span className="material-icons">watch_later</span>
          Watch later
        </NavLink>
        <div className="menu-link" onClick={handleTheme}>
          {theme === "light-theme" ? (
            <>
              <span className="material-icons">dark_mode</span>
              <span>Dark mode</span>
            </>
          ) : (
            <>
              <span className="material-icons">light_mode</span>
              <span>Light mode</span>
            </>
          )}
        </div>
        <NavLink to="/profile" style={getActiveStyle} className="menu-link">
          <span className="material-icons">account_circle</span> Profile
        </NavLink>
      </nav>
      <footer>
        <p>Made by Pratik Devle</p>
        <div className="footer-links">
          <a href="https://github.com/Pratik1005" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-devle-296184160"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/DevlePratik" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} AssetPlay</p>
      </footer>
    </aside>
  );
};

export {NavMenu};
