import { useEffect, useMemo, useState } from 'react';
import { CartContext } from './cart-context';

const STORAGE_KEY = 'book-store-cart';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addToCart(book, quantity = 1) {
    setItems((current) => {
      const existing = current.find((item) => item.id === book.id);
      if (existing) {
        return current.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...current,
        {
          id: book.id,
          title: book.title,
          author: book.author,
          image: book.image,
          price: book.price,
          quantity,
        },
      ];
    });
  }

  function increaseQuantity(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  }

  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const totalQuantity = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((total, item) => total + item.quantity * item.price, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    totalQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
