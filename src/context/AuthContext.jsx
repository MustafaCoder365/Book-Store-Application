import { useEffect, useState } from 'react';
import { AuthContext } from './auth-context';

const STORAGE_KEY = 'book-store-user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  function login(email, name) {
    setUser({ email, name: name || email.split('@')[0] });
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isLoggedIn: Boolean(user),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
