
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TAILOR</div>
      <ul className="navbar-links">
        <li className="active">
          Home<span className="dot"></span>
        </li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Pages</li>
      </ul>
      <div className="navbar-icons">
        <span className="search-icon">🔍</span>
        <span className="menu-icon">☰</span>
      </div>
    </nav>
  );
};

export default Navbar;