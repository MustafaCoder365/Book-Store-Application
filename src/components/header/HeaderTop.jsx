import { useAuth } from '../../context/useAuth';

export default function HeaderTop({ setToggle, Toggle, setAuthMode }) {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {Toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>123-456-7890
      </div>
      <div className="header-top-text">Welcome To Online Book Store </div>
      {isLoggedIn ? (
        <div className="header-top-user">
          <span className="header-top-link">
            <i className="bi bi-person-check-fill"></i>
            Hi, {user.name}
          </span>
          <button
            type="button"
            onClick={logout}
            className="header-top-link header-top-link-btn"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setAuthMode('login')}
          className="header-top-link header-top-link-btn"
        >
          <i className="bi bi-person-fill"></i>
          Login
        </button>
      )}
    </div>
  );
}
