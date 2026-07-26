import { useParams, Link } from 'react-router-dom';
import { getCharacterById, characterGroups, characters } from '../data/characters';
import './CharacterPage.css';

function CharacterPage() {
  const { id } = useParams();
  const character = getCharacterById(id);

  if (!character) {
    return (
      <div className="character-page not-found">
        <h1>Character Not Found</h1>
        <p>The philosophical archetype you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">Return Home</Link>
      </div>
    );
  }

  const group = characterGroups[character.group];
  const relatedCharacters = characters
    .filter(c => c.group === character.group && c.id !== character.id)
    .slice(0, 3);

  return (
    <div className="character-page">
      <div
        className="character-hero"
        style={{
          background: `linear-gradient(135deg, ${character.color}dd, ${character.color}99)`
        }}
      >
        <div className="hero-content">
          <div className="hero-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            {group.name}
          </div>
          <h1 className="hero-title">{character.name}</h1>
          <p className="hero-subtitle">{character.subtitle}</p>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <svg viewBox="0 0 24 24" width="80" height="80" fill="white">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="character-details">
        <div className="details-container">
          <section className="detail-section">
            <h2>Overview</h2>
            <p>{character.fullDescription}</p>
          </section>

          <div className="detail-columns">
            <section className="detail-section">
              <h2>Strengths</h2>
              <ul className="trait-list strengths">
                {character.strengths.map((strength, index) => (
                  <li key={index} style={{ borderColor: character.color }}>
                    {strength}
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>Challenges</h2>
              <ul className="trait-list challenges">
                {character.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="detail-section philosophers-section">
            <h2>Notable Philosophers</h2>
            <div className="philosophers-list">
              {character.philosophers.map((philosopher, index) => (
                <span
                  key={index}
                  className="philosopher-tag"
                  style={{ backgroundColor: `${character.color}15`, color: character.color }}
                >
                  {philosopher}
                </span>
              ))}
            </div>
          </section>

          {relatedCharacters.length > 0 && (
            <section className="detail-section related-section">
              <h2>Related Archetypes</h2>
              <p className="related-intro">
                Explore other archetypes in {group.name}:
              </p>
              <div className="related-grid">
                {relatedCharacters.map(related => (
                  <Link
                    key={related.id}
                    to={`/character/${related.id}`}
                    className="related-card"
                    style={{ borderColor: related.color }}
                  >
                    <div
                      className="related-icon"
                      style={{ backgroundColor: related.color }}
                    >
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="related-info">
                      <h3>{related.name}</h3>
                      <p>{related.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="page-actions">
            <Link to="/" className="action-button secondary">
              Back to All Archetypes
            </Link>
            <Link
              to="/test"
              className="action-button primary"
              style={{ backgroundColor: character.color }}
            >
              Take the Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
