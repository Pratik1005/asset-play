import {useMobileMenu} from "../context";

const MobileHeader = () => {
  const {setMobileMenuToggle} = useMobileMenu();

  const handleMenu = () => {
    setMobileMenuToggle((prev) => !prev);
  };
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
