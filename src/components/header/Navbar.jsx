import { Link } from 'react-router-dom';

export default function Navbar({ Toggle, setToggle, setAuthMode }) {
  return (
    <nav style={{ left: Toggle && '0' }} className="navbar">
      <ul className="navbar-links">
        <Link onClick={() => setToggle(false)} to="/" className="navbar-link">
          Home
        </Link>
        <Link
          onClick={() => setToggle(false)}
          to="/authors"
          className="navbar-link"
        >
          Authors
        </Link>
        <Link
          onClick={() => setToggle(false)}
          to="/about"
          className="navbar-link"
        >
          About Us
        </Link>
        <Link
          onClick={() => setToggle(false)}
          to="/contact"
          className="navbar-link"
        >
          Contact US
        </Link>
        <button
          type="button"
          onClick={() => {
            setToggle(false);
            setAuthMode('login');
          }}
          className="navbar-link navbar-link-btn"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            setToggle(false);
            setAuthMode('register');
          }}
          className="navbar-link navbar-link-btn"
        >
          Register
        </button>
      </ul>
    </nav>
  );
}
