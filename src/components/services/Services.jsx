import './services.css';
export default function Services() {
  return (
    <div className="services">
      <div className="services-item">
        <i className="bi bi-truck">
          <b>Free Shipping</b>
        </i>
      </div>
      <div className="services-item">
        <i className="bi bi-gift">
          <b>Gift Card</b>
        </i>
      </div>
      <div className="services-item">
        <i className="bi bi-arrow-clockwise">
          <b>7 Day return </b>
        </i>
      </div>
      <div className="services-item">
        <i className="bi bi-send">
          <b>Contact Us</b>
        </i>
      </div>
    </div>
  );
}
