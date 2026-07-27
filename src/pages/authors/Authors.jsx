import { Link } from 'react-router-dom';
import { authors } from '../../data/authors';
import { assetUrl } from '../../utils/asset';
import './authors.css';

export default function Authors() {
  return (
    <main className="authors">
      <div className="authors-header">
        <h1>Our Authors</h1>
        <p>Browse books by your favorite writers.</p>
      </div>

      <div className="authors-grid">
        {authors.map((author) => (
          <Link
            key={author.id}
            to={`/?search=${encodeURIComponent(author.name)}`}
            className="author-card"
          >
            <img src={assetUrl(author.image)} alt={author.name} />
            <h2>{author.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
