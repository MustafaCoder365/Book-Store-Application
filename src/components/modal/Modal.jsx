import './modal.css';
import Rating from '../book-slider/Rating';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/useCart';

export default function Modal({ bookData, setOpenModal }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!bookData) return null;
  const { image, title, inStock, rating, reviews, author, price, id } =
    bookData;

  function handleAddToCart() {
    addToCart(bookData, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div onClick={() => setOpenModal(false)} className="modal-container">
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal-content"
      >
        <i
          onClick={() => setOpenModal(false)}
          className="bi bi-x-circle-fill modal-icon"
        ></i>
        <div className="modal-content-img">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-title-info-stock">
            <b>Status: </b>
            {inStock ? 'in stock' : 'not in stock'}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author:</b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>price:</b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value) || 1))
              }
              className="modal-add-to-cart-input"
            />
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className="modal-add-to-cart-btn"
            >
              <i className={`bi ${added ? 'bi-check-lg' : 'bi-cart-plus'}`}></i>{' '}
              {added ? 'Added' : 'Add To cart'}
            </button>
          </div>
          <Link to={`/book/${id}`} className="modal-content-info-link">
            see More Details
          </Link>
        </div>
      </div>
    </div>
  );
}
