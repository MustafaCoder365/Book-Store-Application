import './about.css';

const stats = [
  { label: 'Books in catalog', value: '10+' },
  { label: 'Featured authors', value: '30' },
  { label: 'Happy readers', value: '12,000+' },
  { label: 'Years in business', value: '5' },
];

export default function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <h1>About Book Store</h1>
        <p>
          We believe every reader deserves easy access to great books. Since
          day one, Book Store has been built around a simple idea: curate
          honestly, ship quickly, and make discovering your next favorite
          book effortless.
        </p>
      </section>

      <section className="about-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="about-stat-card">
            <span className="about-stat-value">{stat.value}</span>
            <span className="about-stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="about-content">
        <div className="about-block">
          <i className="bi bi-book"></i>
          <h2>Our Mission</h2>
          <p>
            To connect readers with stories and ideas that matter, through a
            catalog that's carefully curated rather than endless and
            overwhelming.
          </p>
        </div>
        <div className="about-block">
          <i className="bi bi-truck"></i>
          <h2>Fast & Reliable</h2>
          <p>
            Free shipping on every order, a 7-day return policy, and a
            support team that actually answers your questions.
          </p>
        </div>
        <div className="about-block">
          <i className="bi bi-people"></i>
          <h2>Community First</h2>
          <p>
            We work directly with authors and independent publishers to
            bring you titles you won't easily find elsewhere.
          </p>
        </div>
      </section>
    </main>
  );
}
