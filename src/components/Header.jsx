import "../styles/header.css";
import useIsMobile from "../usemobile";
const Header = () => {
  const isMobile = useIsMobile();
  console.log(isMobile, "isMobile");
  return (
    <div className="headerMain">
      {/* Logo */}
      <h1 className="headerLogo">SOCIALS</h1>
      {/* Menu */}
      {!isMobile ? (
        <>
          <div className="headerMenu">
            <p className="headerOption">Company</p>
            <p className="headerOption">FAQ</p>
            <p className="headerOption">Blog</p>
            <p className="headerOption">Contact</p>
          </div>
          {/* Button */}
          <img src="app-store.svg" alt="" className="headerButton" />
        </>
      ) : (
        <img src="burger.svg" alt="" className="hamburger" />
      )}
    </div>
  );
};

export default Header;
