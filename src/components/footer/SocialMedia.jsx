const socialLinks = [
  { icon: 'bi-instagram', color: '#D49D99', label: 'Instagram', href: 'https://instagram.com' },
  { icon: 'bi-facebook', color: '#2b82bc', label: 'Facebook', href: 'https://facebook.com' },
  { icon: 'bi-youtube', color: '#fc0300', label: 'YouTube', href: 'https://youtube.com' },
  { icon: 'bi-twitter', color: '#87CBE9', label: 'Twitter', href: 'https://twitter.com' },
  { icon: 'bi-telegram', color: '#0003F5', label: 'Telegram', href: 'https://telegram.org' },
];

export default function SocialMedia() {
  return (
    <div className="footer-social-media">
      <div className="footer-social-media-text">Follow us on social media</div>

      <div className="footer-social-media-icons">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="footer-social-media-icon"
          >
            <i style={{ color: social.color }} className={`bi ${social.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
