import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {currentYear} PhilCompass. All rights reserved.
        </p>
        <p className="footer-credits">
          PhilCompass made by the Philomasochists | Website made by Joanne Wang
        </p>
      </div>
    </footer>
  );
}

export default Footer;
