import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Discover Your Philosophical Alignment</h1>
        <p className="banner-subtitle">
          Explore the great questions of existence and find which philosophical
          tradition resonates with your worldview. Are you a Stoic, an Existentialist,
          a Pragmatist, or something else entirely?
        </p>
        <Link to="/test" className="banner-cta">
          Take the Test
        </Link>
      </div>
      <div className="banner-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
        <div className="decoration-circle circle-4"></div>
      </div>
    </section>
  );
}

export default Banner;
