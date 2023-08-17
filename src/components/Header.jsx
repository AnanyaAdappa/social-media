import "../styles/header.css";
const Header = () => {
  return (
    <div className="headerMain">
      {/* Logo */}
      <h1 className="headerLogo">SOCIALS</h1>
      {/* Menu */}
      <div className="headerMenu">
        <p className="headerOption">Company</p>
        <p className="headerOption">FAQ</p>
        <p className="headerOption">Blog</p>
        <p className="headerOption">Contact</p>
      </div>
      {/* Button */}
      <img src="app-store.svg" alt="" className="headerButton" />
    </div>
  );
};

export default Header;
