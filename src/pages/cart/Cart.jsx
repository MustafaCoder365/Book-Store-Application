import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import { assetUrl } from '../../utils/asset';
import './cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const {
    items: cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalQuantity,
    totalPrice,
  } = useCart();

  return (
    <main className="Cart">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <i className="bi bi-cart-x"></i>

          <h2>Your cart is empty</h2>

          <p>Add some books to see them here.</p>

          <Link to="/" className="cart-empty-link">
            Browse books
          </Link>
        </div>
      ) : (
        <div className="cart-wrapper">
          <section className="cart-items">
            {cartItems.map((item) => (
              <article key={item.id} className="cart-item">
                <Link to={`/book/${item.id}`}>
                  <img
                    src={assetUrl(`/books/${item.image}`)}
                    alt={item.title}
                    className="cart-item-img"
                  />
                </Link>

                <div className="cart-item-info">
                  <div className="cart-item-details">
                    <Link
                      to={`/book/${item.id}`}
                      className="cart-item-book-title"
                    >
                      {item.title}
                    </Link>

                    <p className="cart-item-author">
                      By <span>{item.author}</span>
                    </p>

                    <p className="cart-item-price-each">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-item-quantity">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        aria-label={`Decrease quantity of ${item.title}`}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>

                      <span className="quantity-number">{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.title}`}
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>

                    <span className="cart-item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="bi bi-trash3"></i>
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart-order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Different books</span>
              <strong>{cartItems.length}</strong>
            </div>

            <div className="summary-row">
              <span>Total quantity</span>
              <strong>{totalQuantity}</strong>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <div className="summary-divider"></div>

            <button
              type="button"
              className="checkout-button"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
