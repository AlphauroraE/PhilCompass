import { Link } from 'react-router-dom';
import './CharacterCard.css';

function CharacterCard({ character, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`character-card ${isEven ? 'left' : 'right'}`}>
      <div className="character-image-container">
        <div
          className="character-image-placeholder"
          style={{ borderColor: character.color }}
        >
          <div
            className="placeholder-icon"
            style={{ backgroundColor: character.color }}
          >
            <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="character-content">
        <div
          className="character-group-badge"
          style={{ backgroundColor: character.color }}
        >
          {character.group.charAt(0).toUpperCase() + character.group.slice(1)}
        </div>
        <h2 className="character-name">{character.name}</h2>
        <p className="character-subtitle">{character.subtitle}</p>
        <p className="character-description">{character.shortDescription}</p>
        <Link
          to={`/character/${character.id}`}
          className="character-button"
          style={{ backgroundColor: character.color }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default CharacterCard;
