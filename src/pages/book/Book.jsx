import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { books } from '../../data/books';
import { useCart } from '../../context/useCart';
import Rating from '../../components/book-slider/Rating';
import './book.css';

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const book = books.find((item) => String(item.id) === id);

  if (!book) {
    return (
      <main className="book-page book-not-found">
        <h1>Book not found</h1>
        <p>The book you're looking for doesn't exist or was removed.</p>
        <button type="button" onClick={() => navigate('/')}>
          Back to home
        </button>
      </main>
    );
  }

  const related = books
    .filter((item) => item.author === book.author && item.id !== book.id)
    .slice(0, 4);

  function handleAddToCart() {
    addToCart(book, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <main className="book-page">
      <nav className="book-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{book.title}</span>
      </nav>

      <div className="book-details">
        <div className="book-details-img-wrapper">
          <img src={`/books/${book.image}`} alt={book.title} />
        </div>

        <div className="book-details-info">
          <h1 className="book-details-title">{book.title}</h1>
          <p className="book-details-author">
            By <span>{book.author}</span>
          </p>

          <Rating rating={book.rating} reviews={book.reviews} />

          <div className="book-details-status">
            <b>Status:</b>{' '}
            <span className={book.inStock ? 'in-stock' : 'out-of-stock'}>
              {book.inStock ? 'In stock' : 'Out of stock'}
            </span>
          </div>

          <div className="book-details-price">${book.price.toFixed(2)}</div>

          <dl className="book-details-specs">
            <div>
              <dt>Print length</dt>
              <dd>{book.printLength} pages</dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>{book.language}</dd>
            </div>
            <div>
              <dt>Publication date</dt>
              <dd>{book.PublicationDate}</dd>
            </div>
            <div>
              <dt>Reviews</dt>
              <dd>{book.reviews}</dd>
            </div>
          </dl>

          <div className="book-details-actions">
            <div className="book-details-quantity">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <i className="bi bi-dash-lg"></i>
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>

            <button
              type="button"
              className="book-details-add-btn"
              onClick={handleAddToCart}
              disabled={!book.inStock}
            >
              <i className={`bi ${added ? 'bi-check-lg' : 'bi-cart-plus'}`}></i>
              {added ? 'Added to cart' : book.inStock ? 'Add to cart' : 'Unavailable'}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="book-related">
          <h2>More by {book.author}</h2>
          <div className="book-related-grid">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/book/${item.id}`}
                className="book-related-card"
              >
                <img src={`/books/${item.image}`} alt={item.title} />
                <h3>{item.title}</h3>
                <span>${item.price.toFixed(2)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
