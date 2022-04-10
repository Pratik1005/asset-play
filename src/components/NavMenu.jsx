const NavMenu = () => {
  return (
    <header className="pd-sm">
      <div>
        <h1 className="logo pd-bottom-lg">AssetPlay</h1>
      </div>
      <nav>
        <ul className="side-menu">
          <li>
            <span class="material-icons">home</span> Home
          </li>
          <li>
            <span class="material-icons">search</span> Search
          </li>
          <li>
            <span class="material-icons">video_library</span>
            Playlist
          </li>
          <li>
            <span class="material-icons">favorite</span> Liked videos
          </li>
          <li>
            <span class="material-icons">history</span> History
          </li>
          <li>
            <span class="material-icons">watch_later</span>
            Watch later
          </li>
          <li>
            <span className="material-icons">account_circle</span> Profile
          </li>
        </ul>
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
    </header>
  );
};

export {NavMenu};
