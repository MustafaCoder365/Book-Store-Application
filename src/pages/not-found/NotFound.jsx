import { Link } from 'react-router-dom';
import './not-found.css';

export default function NotFound() {
  return (
    <main className="not-found">
      <i className="bi bi-emoji-frown"></i>
      <h1>404</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="not-found-link">
        Back to home
      </Link>
    </main>
  );
}
