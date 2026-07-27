import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import './auth.css';

export default function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">
          <i className="bi bi-person-plus"></i>
        </div>
        <h1>Create your account</h1>
        <p className="auth-subtitle">Join Book Store in a few seconds</p>

        <RegisterForm />

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </main>
  );
}
