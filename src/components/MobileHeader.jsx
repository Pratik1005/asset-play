const MobileHeader = () => {
  const handleMenu = () => {};
  return (
    <header className="pd-xs">
      <span className="material-icons menu cursor-pointer" onClick={handleMenu}>
        menu
      </span>
      <h1 className="logo">AssetPlay</h1>
    </header>
  );
};

export {MobileHeader};
