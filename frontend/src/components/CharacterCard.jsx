import { Link } from 'react-router-dom';
import characterImages from '../assets/characters';
import './CharacterCard.css';

function CharacterCard({ character, index }) {
  const isEven = index % 2 === 0;
  const characterImage = characterImages[character.id];

  return (
    <div className={`character-card ${isEven ? 'left' : 'right'}`}>
      <div className="character-image-container">
        <div
          className="character-image-wrapper"
          style={{ borderColor: character.color }}
        >
          <img
            src={characterImage}
            alt={character.name}
            className="character-image"
          />
        </div>
      </div>

      <div className="character-content">
        <div className="character-badges">
          <div
            className="character-code-badge"
            style={{ backgroundColor: character.color }}
          >
            {character.code}
          </div>
          <div
            className="character-group-badge"
            style={{ borderColor: character.color, color: character.color }}
          >
            {character.group.toUpperCase()}
          </div>
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
