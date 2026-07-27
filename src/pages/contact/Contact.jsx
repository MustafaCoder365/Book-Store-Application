import { useState } from 'react';
import './contact.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values) {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.message.trim()) {
      nextErrors.message = 'Message cannot be empty.';
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }
    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  }

  return (
    <main className="Contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>
            Have a question about an order, a book request, or just want to
            say hi? Send us a message and we'll get back to you within 24
            hours.
          </p>

          <ul className="contact-info-list">
            <li>
              <i className="bi bi-geo-alt"></i> Baghdad, Iraq
            </li>
            <li>
              <i className="bi bi-envelope"></i> support@bookstore.example
            </li>
            <li>
              <i className="bi bi-telephone"></i> +964 770 000 0000
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="contact-success">
              <i className="bi bi-check-circle-fill"></i>
              Thanks! Your message has been sent.
            </div>
          )}

          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
            ></textarea>
            {errors.message && (
              <span className="field-error">{errors.message}</span>
            )}
          </label>

          <button type="submit">Send message</button>
        </form>
      </div>
    </main>
  );
}
