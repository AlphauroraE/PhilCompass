import Banner from '../components/Banner';
import CharacterCard from '../components/CharacterCard';
import { characters, characterGroups } from '../data/characters';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />

      <section className="characters-section">
        <div className="characters-header">
          <h2>The 16 Philosophical Archetypes</h2>
          <p>
            Explore the diverse landscape of philosophical thought through our
            16 unique archetypes. Each represents a distinct approach to
            understanding reality, ethics, knowledge, and meaning.
          </p>

          <div className="group-legend">
            {Object.entries(characterGroups).map(([key, group]) => (
              <div key={key} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: group.color }}
                ></span>
                <span className="legend-name">{group.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="characters-list">
          {characters.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
