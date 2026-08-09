import logo from "../assets/logo/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="logo">
          <img src={logo} alt="Aapli Naukari" />
        </a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/jobs">Latest Jobs</a>
          <a href="/results">Results</a>
          <a href="/admit-card">Admit Card</a>
          <a href="/contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;