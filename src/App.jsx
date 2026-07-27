import Footer from './components/footer/Footer';
import Header from './components/header/header';
import About from './pages/about/About';
import HomePage from './pages/home/HomePage';
import Authors from './pages/authors/Authors';
import Contact from './pages/contact/Contact';
import Register from './pages/forms/Register';
import Login from './pages/forms/Login';
import Book from './pages/book/Book';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import NotFound from './pages/not-found/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
