import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import './checkout.css';

const initialForm = { fullName: '', address: '', city: '', phone: '' };

function generateOrderId() {
  return `BK-${Math.floor(100000 + Math.random() * 900000)}`;
}

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);

  const shipping = totalPrice > 30 ? 0 : 4.99;
  const tax = totalPrice * 0.05;
  const grandTotal = totalPrice + shipping + tax;

  function validate(values) {
    const nextErrors = {};
    if (!values.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!values.address.trim()) nextErrors.address = 'Address is required.';
    if (!values.city.trim()) nextErrors.city = 'City is required.';
    if (!values.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{7,}$/.test(values.phone)) {
      nextErrors.phone = 'Enter a valid phone number.';
    }
    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handlePlaceOrder(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setOrderId(generateOrderId());
      clearCart();
    }
  }

  if (orderId) {
    return (
      <main className="checkout checkout-success">
        <i className="bi bi-check-circle-fill"></i>
        <h1>Order placed!</h1>
        <p>
          Thanks, {form.fullName.split(' ')[0]}. Your order{' '}
          <strong>{orderId}</strong> has been received.
        </p>
        <p className="checkout-success-note">
          This is a frontend demo — no real payment was processed and no
          email will be sent.
        </p>
        <Link to="/" className="checkout-success-link">
          Continue shopping
        </Link>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="checkout checkout-empty">
        <i className="bi bi-cart-x"></i>
        <h1>Your cart is empty</h1>
        <p>Add some books before checking out.</p>
        <Link to="/" className="checkout-success-link">
          Browse books
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-wrapper">
        <form className="checkout-form" onSubmit={handlePlaceOrder} noValidate>
          <h2>Shipping details</h2>

          <label>
            Full name
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.fullName && (
              <span className="field-error">{errors.fullName}</span>
            )}
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street, building, apartment"
            />
            {errors.address && (
              <span className="field-error">{errors.address}</span>
            )}
          </label>

          <div className="checkout-form-row">
            <label>
              City
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
              />
              {errors.city && (
                <span className="field-error">{errors.city}</span>
              )}
            </label>

            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="07xx xxx xxxx"
              />
              {errors.phone && (
                <span className="field-error">{errors.phone}</span>
              )}
            </label>
          </div>

          <button type="submit" className="checkout-place-order-btn">
            Place order · ${grandTotal.toFixed(2)}
          </button>

          <button
            type="button"
            className="checkout-back-btn"
            onClick={() => navigate('/cart')}
          >
            <i className="bi bi-arrow-left"></i> Back to cart
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          <div className="checkout-summary-items">
            {items.map((item) => (
              <div key={item.id} className="checkout-summary-item">
                <img src={`/books/${item.image}`} alt={item.title} />
                <div>
                  <p className="checkout-summary-item-title">{item.title}</p>
                  <p className="checkout-summary-item-qty">
                    Qty {item.quantity}
                  </p>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong>
          </div>
          <div className="summary-row">
            <span>Tax (5%)</span>
            <strong>${tax.toFixed(2)}</strong>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <strong>${grandTotal.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
