import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import './auth.css';

export default function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">
          <i className="bi bi-person-lock"></i>
        </div>
        <h1>Welcome back</h1>
        <p className="auth-subtitle">Log in to continue to Book Store</p>

        <LoginForm />

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
}
