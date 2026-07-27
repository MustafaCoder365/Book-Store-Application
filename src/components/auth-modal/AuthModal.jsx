import LoginForm from '../../pages/forms/LoginForm';
import RegisterForm from '../../pages/forms/RegisterForm';
import '../../pages/forms/auth.css';
import './auth-modal.css';

export default function AuthModal({ mode, onClose, onSwitchMode }) {
  const isLogin = mode === 'login';

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
            <i className={`bi ${isLogin ? 'bi-person-lock' : 'bi-person-plus'}`}></i>
          </div>
          <h1>{isLogin ? 'Welcome back' : 'Create your account'}</h1>
          <p className="auth-subtitle">
            {isLogin
              ? 'Log in to continue to Book Store'
              : 'Join Book Store in a few seconds'}
          </p>

          {isLogin ? (
            <LoginForm onSuccess={() => setTimeout(onClose, 1200)} />
          ) : (
            <RegisterForm onSuccess={() => setTimeout(onClose, 1200)} />
          )}

          <p className="auth-switch">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              className="auth-switch-btn"
              onClick={() => onSwitchMode(isLogin ? 'register' : 'login')}
            >
              {isLogin ? 'Register' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
