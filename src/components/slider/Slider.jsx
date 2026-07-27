import './slider.css';
import FirstBook from '../../images/book1.png';
import SecondBook from '../../images/book2.png';
import ThirdBook from '../../images/book3.png';
import { useState } from 'react';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handelClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <i
        onClick={() => handelClick('left')}
        className="bi-chevron-double-left arrow-left"
      ></i>

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt="First Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. It's a journey.
            </p>
          </div>
        </div>

        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt="Second Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You Can read at home at the bookstore
            </p>
          </div>
        </div>

        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt="Third Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">We send you the book you at home</p>
          </div>
        </div>
      </div>

      <i
        onClick={() => handelClick('right')}
        className="bi-chevron-double-right arrow-right"
      ></i>
    </div>
  );
}
