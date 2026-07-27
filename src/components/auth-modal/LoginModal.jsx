import { Link } from 'react-router-dom';
import LoginForm from '../../pages/forms/LoginForm';
import '../../pages/forms/auth.css';
import './auth-modal.css';

export default function LoginModal({ onClose, onSwitchToRegister }) {
  return (
    <div onClick={onClose} className="auth-modal-container">
      <div
        onClick={(event) => event.stopPropagation()}
        className="auth-modal-content"
      >
        <i
          onClick={onClose}
          className="bi bi-x-circle-fill auth-modal-close"
        ></i>

        <div className="auth-card auth-modal-card">
          <div className="auth-icon">
            <i className="bi bi-person-lock"></i>
          </div>
          <h1>Welcome back</h1>
          <p className="auth-subtitle">Log in to continue to Book Store</p>

          <LoginForm onSuccess={() => setTimeout(onClose, 1200)} />

          <p className="auth-switch">
            Don't have an account?{' '}
            {onSwitchToRegister ? (
              <button
                type="button"
                className="auth-switch-btn"
                onClick={onSwitchToRegister}
              >
                Register
              </button>
            ) : (
              <Link to="/register" onClick={onClose}>
                Register
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
