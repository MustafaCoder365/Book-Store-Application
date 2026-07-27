# 📚 Book Store

A full-featured React.js e-commerce web application for an online book store — complete with a product catalog, shopping cart, checkout flow, authentication, and a clean, fully responsive UI.

## 🌍 Live Demo

🔗 https://mustafacoder365.github.io/Book-Store-Application/

## ✨ Features

- 📖 Book catalog with 3 curated homepage carousels (Most Gifted, Best Seller, Most Wished For)
- 🔍 Live search by book title or author
- 📄 Dynamic book details page with specs, quantity selector, and related titles
- ✍️ Authors directory (30 authors) linked to search
- 🛒 Fully functional shopping cart (Context API + localStorage persistence)
- 💳 Multi-step checkout flow with shipping form, order summary, and order confirmation
- 🔐 Login & Register — available both as a modal (with mode switching) and as standalone pages, with client-side validation and demo authentication state
- 👤 Persistent login state reflected in the header (shows logged-in user + logout)
- 🧭 404 Not Found page for unmatched routes
- 📬 Contact form with validation
- 🌗 Quick-view modal for books
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Keyboard-accessible interactive controls

## 🛠 Built With

- [React 19](https://react.dev/)
- [React Router DOM 7](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- React Context API (cart & auth state management)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- CSS3 (component-scoped stylesheets)
- ESLint

## 📸 Screenshots

| Home | Book Details |
|------|---------------|
| _add screenshot_ | _add screenshot_ |

| Cart | Checkout |
|------|----------|
| _add screenshot_ | _add screenshot_ |

| Login | Authors |
|-------|---------|
| _add screenshot_ | _add screenshot_ |

## 📂 Project Structure

```
book-store-pro/
├── public/
│   ├── authors/
│   └── books/
├── src/
│   ├── components/
│   │   ├── auth-modal/
│   │   ├── book-slider/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── heading-title/
│   │   ├── modal/
│   │   ├── search-results/
│   │   └── services/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── data/
│   │   ├── authors.js
│   │   └── books.js
│   ├── pages/
│   │   ├── about/
│   │   ├── authors/
│   │   ├── book/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── contact/
│   │   ├── forms/
│   │   ├── home/
│   │   └── not-found/
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── README.md
```

## 🚀 Installation

```bash
git clone https://github.com/MustafaCoder365/Book-Store-Application.git
cd Book-Store-Application
npm install
npm run dev
```

## 📦 Deployment (GitHub Pages)

This project is preconfigured for GitHub Pages using `gh-pages` and `HashRouter`:

```bash
npm run deploy
```

This builds the app and publishes the `dist` folder to the `gh-pages` branch automatically.

## 👤 Author

**Mustafa Shakir**
- 🌐 GitHub: https://github.com/MustafaCoder365
- 💼 LinkedIn: https://www.linkedin.com/in/mustafa-shakir-840374330
- 📧 Email: mustafa1997670@gmail.com
