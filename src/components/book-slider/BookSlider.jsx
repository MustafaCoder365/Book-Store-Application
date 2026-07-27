import { useState } from 'react';
import './book-slider.css';
import Rating from './Rating.jsx';
import Modal from '../modal/Modal.jsx';
import { useCart } from '../../context/useCart.js';
import { assetUrl } from '../../utils/asset.js';

export default function BookSlider({ data }) {
  const { addToCart } = useCart();
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (event, item) => {
    event.stopPropagation();
    addToCart(item, 1);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  // Handel Modal
  const handModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  };
  // Handle Click
  const maxIndex = Math.max(0, data.length - 1);
  const handelClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((current) => Math.max(0, current - 1));
    } else {
      setSlideIndex((current) => Math.min(maxIndex, current + 1));
    }
  };
  return (
    <div className="book-slider-container">
      {slideIndex > 0 && (
        <button
          type="button"
          onClick={() => handelClick('left')}
          aria-label="Previous books"
          className="book-slider-arrow-left"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={assetUrl(`/books/${item.image}`)}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h2 className="book-slide-item-title">{item.title}</h2>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slide-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <button
                type="button"
                onClick={() => handModal(item)}
                aria-label={`Quick view ${item.title}`}
                className="book-slider-icon-btn"
              >
                <i className="bi bi-eye-fill"></i>
              </button>
              <button
                type="button"
                onClick={(event) => handleAddToCart(event, item)}
                aria-label={`Add ${item.title} to cart`}
                className="book-slider-icon-btn"
              >
                <i
                  className={`bi ${addedId === item.id ? 'bi-check-lg' : 'bi-cart-plus'}`}
                ></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      {slideIndex < maxIndex && (
        <button
          type="button"
          onClick={() => handelClick('right')}
          aria-label="Next books"
          className="book-slider-arrow-right"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
}
