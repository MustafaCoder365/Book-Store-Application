import AboutUsAbout from './AboutUs';
import ContactInformation from './ContactInformation';
import './footer.css';
import SocialMedia from './SocialMedia';
import UsefulLinks from './UsefulLinks';
export default function Footer() {
  return (
    <footer className="footer">
      <SocialMedia />
      <div className="footer-links-wrapper">
        <UsefulLinks />
        <ContactInformation />
        <AboutUsAbout />
      </div>
    </footer>
  );
}
