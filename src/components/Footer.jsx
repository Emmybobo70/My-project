import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-title">Boost Your Business</h3>
        <p>Up To High Level</p>
        <p>
          Start by <span className="highlight">Saying Hi</span>
        </p>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Links</h3>
        <ul className="footer-links">
          <li>Faqs</li>
          <li>About Us</li>
          <li>Privacy Policy help</li>
          <li>Affiliate Services</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Contact</h3>
        <ul className="footer-contact">
          <li>Info@agence.com</li>
          <li>Phone: 345 655685</li>
          <li>facebook.agence</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
