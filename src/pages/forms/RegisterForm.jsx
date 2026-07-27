import { useState } from 'react';
import { useAuth } from '../../context/useAuth';

const initialForm = { name: '', email: '', password: '', confirmPassword: '' };

export default function RegisterForm({ onSuccess }) {
  const { login } = useAuth();
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
    if (!values.password) {
      nextErrors.password = 'Password is required.';
    } else if (values.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.';
    }
    if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = 'Passwords do not match.';
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
      login(form.email, form.name);
      setSubmitted(true);
      setForm(initialForm);
      onSuccess?.();
    }
  }

  return (
    <>
      {submitted && (
        <div className="auth-success">
          <i className="bi bi-check-circle-fill"></i>
          Account created! (demo only — not connected to a backend)
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <label>
          Full name
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
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
        </label>

        <label>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <span className="field-error">{errors.confirmPassword}</span>
          )}
        </label>

        <button type="submit" className="auth-submit">
          Create account
        </button>
      </form>
    </>
  );
}
