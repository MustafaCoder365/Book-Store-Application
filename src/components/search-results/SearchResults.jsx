import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import Rating from '../book-slider/Rating';
import './search-results.css';

export default function SearchResults({ query, results }) {
  const { addToCart } = useCart();

  return (
    <div className="search-results">
      <h2 className="search-results-title">
        {results.length} result{results.length !== 1 ? 's' : ''} for
        <span> "{query}"</span>
      </h2>

      {results.length === 0 ? (
        <p className="search-results-empty">
          No books matched your search. Try a different title or author name.
        </p>
      ) : (
        <div className="search-results-grid">
          {results.map((book) => (
            <div key={book.id} className="search-result-card">
              <Link to={`/book/${book.id}`} className="search-result-img">
                <img src={`/books/${book.image}`} alt={book.title} />
              </Link>
              <Link to={`/book/${book.id}`} className="search-result-title">
                {book.title}
              </Link>
              <p className="search-result-author">{book.author}</p>
              <Rating rating={book.rating} reviews={book.reviews} />
              <div className="search-result-footer">
                <span className="search-result-price">
                  ${book.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => addToCart(book, 1)}
                  disabled={!book.inStock}
                  className="search-result-add-btn"
                >
                  <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
