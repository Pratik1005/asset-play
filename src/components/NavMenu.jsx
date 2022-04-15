import {NavLink} from "react-router-dom";

const getActiveStyle = ({isActive}) =>
  isActive ? {backgroundColor: "var(--menu-hover)"} : null;

const NavMenu = () => {
  return (
    <aside className="pd-sm">
      <div>
        <h1 className="logo">AssetPlay</h1>
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
          <span className="material-icons">favorite</span> Liked videos
        </NavLink>
        <NavLink to="/history" style={getActiveStyle} className="menu-link">
          <span className="material-icons">history</span> History
        </NavLink>
        <NavLink to="/watchlater" style={getActiveStyle} className="menu-link">
          <span className="material-icons">watch_later</span>
          Watch later
        </NavLink>
        <div className="menu-link">
          <span className="material-icons">dark_mode</span>
          Dark mode
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
