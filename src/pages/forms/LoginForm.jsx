import { useState } from 'react';
import { useAuth } from '../../context/useAuth';

const initialForm = { email: '', password: '' };

export default function LoginForm({ onSuccess }) {
  const { login } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values) {
    const nextErrors = {};
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
      login(form.email);
      setSubmitted(true);
      onSuccess?.();
    }
  }

  return (
    <>
      {submitted && (
        <div className="auth-success">
          <i className="bi bi-check-circle-fill"></i>
          Logged in successfully! (demo only — not connected to a backend)
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
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

        <button type="submit" className="auth-submit">
          Log in
        </button>
      </form>
    </>
  );
}
