import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/useCart';

export default function HeaderMiddle() {
  const { totalQuantity } = useCart();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/?search=${encodeURIComponent(trimmed)}` : '/');
  }

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b> <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <form
        className="header-middle-search-box"
        onSubmit={handleSearch}
        role="search"
      >
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in book store"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="header-middle-search-btn">
          <i className="bi bi-search"></i>
        </button>
      </form>
      <Link to="/cart" className="header-middle-cart-wrapper">
        <i className="bi bi-cart2"></i>
        {totalQuantity > 0 && (
          <span className="cart-notification">{totalQuantity}</span>
        )}
      </Link>
    </div>
  );
}
