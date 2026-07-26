import { Link } from 'react-router-dom';
import './TestPage.css';

function TestPage() {
  return (
    <div className="test-page">
      <div className="test-container">
        <div className="test-icon">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="#553b6e">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h1>Philosophy Assessment</h1>
        <p className="test-intro">
          Discover your philosophical alignment through a series of thoughtful
          questions about ethics, knowledge, reality, and meaning.
        </p>

        <div className="coming-soon">
          <span>Coming Soon</span>
        </div>

        <p className="test-description">
          The PhilCompass assessment will help you identify which of the 16
          philosophical archetypes best matches your worldview. Answer questions
          about how you think, what you value, and how you understand the world.
        </p>

        <div className="test-preview">
          <h3>What to Expect:</h3>
          <ul>
            <li>Questions about knowledge and truth</li>
            <li>Ethical dilemmas and moral reasoning</li>
            <li>Perspectives on meaning and purpose</li>
            <li>Views on reality and existence</li>
          </ul>
        </div>

        <Link to="/" className="back-home">
          Explore the Archetypes
        </Link>
      </div>
    </div>
  );
}

export default TestPage;
