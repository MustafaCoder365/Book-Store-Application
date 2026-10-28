<div align="center">

# 📚 Book Store

**A full-featured e-commerce book store built with React 19 — catalog, live search, cart, multi-step checkout, and authentication.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Store-2563EB?style=for-the-badge&logo=githubpages&logoColor=white)](https://mustafacoder365.github.io/Book-Store-Application/)

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-61DAFB?style=flat-square&logo=react&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

<br>

![Home](./screenshots/home.png)

</div>

---

## ✨ Highlights

- 🛒 **Shopping cart** with Context API and localStorage persistence
- 💳 **Multi-step checkout** — shipping form, order summary, and order confirmation
- 🔍 **Live search** by book title or author
- 🔐 **Login & register** as a modal (with mode switching) or standalone pages, with validation and persistent login state
- 👁️ **Quick-view modal** for any book
- 📱 **Fully responsive** — mobile, tablet, and desktop
- ♿ **Keyboard-accessible** interactive controls

## 📄 Pages

| Page | What it does |
|---|---|
| **Home** | Hero slider, services, and 3 curated carousels: Most Gifted, Best Seller, Most Wished For |
| **Book details** | Specs, quantity selector, add to cart, and related titles |
| **Authors** | Directory of 30 authors, each linked to search |
| **Cart** | Update quantities, remove items, live totals |
| **Checkout** | Shipping form → order summary → confirmation |
| **Login / Register** | Validated forms; logged-in user shown in the header with logout |
| **About / Contact** | Company info and a validated contact form |
| **404** | Friendly page for unmatched routes |

## 📸 Screenshots

| Catalog | Cart |
|---|---|
| ![Catalog](./screenshots/catalog.png) | ![Cart](./screenshots/cart.png) |

| Login | Register |
|---|---|
| ![Login](./screenshots/login.png) | ![Register](./screenshots/register.png) |

| About | Contact |
|---|---|
| ![About](./screenshots/about.png) | ![Contact](./screenshots/contact.png) |

## 🛠️ Tech Stack

| Area | Tools |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Routing** | [React Router 7](https://reactrouter.com/) (HashRouter, GitHub Pages-ready) |
| **State** | React Context — cart and auth |
| **Icons** | [Bootstrap Icons](https://icons.getbootstrap.com/) |
| **Styling** | Component-scoped CSS3 |
| **Quality** | ESLint |

## 📂 Project Structure

```
src/
├── components/   # Header, footer, sliders, modals, auth modal, search results…
├── context/      # Cart and auth providers + hooks
├── data/         # Books and authors data
├── pages/        # Home, Book, Authors, Cart, Checkout, Login, Register, About, Contact, 404
├── utils/        # Asset path helper
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

```bash
git clone https://github.com/MustafaCoder365/Book-Store-Application.git
cd Book-Store-Application
npm install
npm run dev
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Builds the app and publishes `dist` to the `gh-pages` branch.

## 👤 Author

**Mustafa Shakir** — Frontend Software Developer

[![GitHub](https://img.shields.io/badge/GitHub-MustafaCoder365-181717?style=flat-square&logo=github)](https://github.com/MustafaCoder365)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mustafa%20Shakir-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/mustafa-shakir-840374330)
[![Email](https://img.shields.io/badge/Email-Contact-0F172A?style=flat-square&logo=gmail&logoColor=white)](mailto:mustafa1997670@gmail.com)

⭐ If you like this project, give it a star!
