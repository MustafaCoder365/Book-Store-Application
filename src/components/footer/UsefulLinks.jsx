import { Link } from 'react-router-dom';

export default function UsefulLinks() {
  return (
    <div className="footer-links-item">
      <h3 className="footer-links-item-title">Useful Links</h3>
      <ul className="footer-links">
        <li>
          <Link to="/" className="footer-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/authors" className="footer-link">
            Authors
          </Link>
        </li>
        <li>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
