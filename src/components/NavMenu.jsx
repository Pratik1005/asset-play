const NavMenu = () => {
  return (
    <header>
      <div>
        <h1 className="logo">AssetPlay</h1>
      </div>
      <div className="search-bar">
        <span className="material-icons">search</span>
        <input type="text" placeholder="search" />
      </div>
      <nav className="right-nav">
        <ul>
          <li>
            <span class="material-icons">light_mode</span>
          </li>
          <li>
            <span class="material-icons">account_circle</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export {NavMenu};
