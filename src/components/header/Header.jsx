import './header.css';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';
import Navbar from './Navbar';
import { useState } from 'react';
import AuthModal from '../auth-modal/AuthModal';

export default function Header() {
  const [Toggle, setToggle] = useState(false);
  const [authMode, setAuthMode] = useState(null);

  return (
    <header className="header">
      <HeaderTop
        setToggle={setToggle}
        Toggle={Toggle}
        setAuthMode={setAuthMode}
      />
      <HeaderMiddle />
      <Navbar Toggle={Toggle} setToggle={setToggle} setAuthMode={setAuthMode} />
      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSwitchMode={setAuthMode}
        />
      )}
    </header>
  );
}
