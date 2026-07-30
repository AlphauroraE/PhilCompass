import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { characters, getCharacterByCode } from '../data/characters';
import './TestPage.css';

const questions = [
  // Category: C vs. N (Questions 1-6)
  { id: 1, text: "Can we be certain in our knowledge?", traits: { N: 1 } },
  { id: 2, text: "Is our experience of the world accurate?", traits: { N: 1 } },
  { id: 3, text: "Can truths be based upon sensory experience?", traits: { N: 1, E: 1 } },
  { id: 4, text: "Are ideas our mediator between us and the world?", traits: { C: 1 } },
  { id: 5, text: "Do we have direct access to the world?", traits: { N: 1 } },
  { id: 6, text: "Can we know the extent to which our knowledge of the world is accurate?", traits: { N: 1 } },

  // Category: R vs. D (Questions 7-13)
  { id: 7, text: "Do the structures of the world exist independent of minds?", traits: { R: 1 } },
  { id: 8, text: "Can we discover truth via scientific reasoning?", traits: { R: 1 } },
  { id: 9, text: "Is mathematics a certain knowledge?", traits: { R: 1 } },
  { id: 10, text: "Is truth/morality a matter of human invention?", traits: { D: 1 } },
  { id: 11, text: "Can the world exist without perception of it?", traits: { R: 1 } },
  { id: 12, text: "Is matter the fundamental substance of our world?", traits: { R: 1 } },
  { id: 13, text: "Does matter make up more of reality than spirit/idea?", traits: { R: 1 } },

  // Category: E vs. I (Questions 14-22)
  { id: 14, text: "Truth can be obtained via deductive reasoning and innate ideas.", traits: { I: 1 } },
  { id: 15, text: "All knowledge must be based upon the physical world reality in some way.", traits: { E: 1 } },
  { id: 16, text: "Any failure of reasoning comes from a faultiness in my own perception.", traits: { I: 1, N: 1 } },
  { id: 17, text: "I trust my mind and reasoning more than sensory experience.", traits: { I: 1, N: 1 } },
  { id: 18, text: "Philosophy is best practiced through communal discussion.", traits: { E: 1 } },
  { id: 19, text: "Philosophy is inherently communal.", traits: { E: 1 } },
  { id: 20, text: "Ethics should be self-enforced as opposed to enforced by the greater community.", traits: { I: 1 } },
  { id: 21, text: "Mathematics is innate and not discovered.", traits: { I: 1 } },
  { id: 22, text: "Do objects have an innate essence?", traits: { I: 1 } },

  // Category: A vs. T (Questions 23-28)
  { id: 23, text: "Philosophy must be practiced.", traits: { A: 1 } },
  { id: 24, text: "Mapping reality is the highest goal of Philosophy.", traits: { T: 1 } },
  { id: 25, text: "A philosophy that can't be lived out is a waste of time.", traits: { A: 1 } },
  { id: 26, text: "Can philosophy be passed down exclusively through teaching, explanation, and discussion?", traits: { T: 1 } },
  { id: 27, text: "Philosophy is best taught through explanation.", traits: { T: 1 } },
  { id: 28, text: "Is the goal of philosophy cognitive truth?", traits: { T: 1 } }
];

const answerOptions = [
  { value: 3, label: "Strongly Agree" },
  { value: 2, label: "Agree" },
  { value: 1, label: "Slightly Agree" },
  { value: 0, label: "Neutral" },
  { value: -1, label: "Slightly Disagree" },
  { value: -2, label: "Disagree" },
  { value: -3, label: "Strongly Disagree" }
];

function TestPage() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const progress = useMemo(() => {
    return ((currentQuestion + 1) / questions.length) * 100;
  }, [currentQuestion]);

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const checkAllSameAnswer = () => {
    const answerValues = Object.values(answers);
    if (answerValues.length !== questions.length) return false;
    return answerValues.every(val => val === answerValues[0]);
  };

  const calculateResult = () => {
    // Check if all answers are the same -> Skeptic
    if (checkAllSameAnswer()) {
      const skeptic = characters.find(c => c.id === 'skeptics');
      setResult({
        character: skeptic,
        scores: { C: 0, N: 0, R: 0, D: 0, E: 0, I: 0, A: 0, T: 0 },
        isSkeptic: true
      });
      setShowResult(true);
      return;
    }

    // Calculate scores for each trait
    const scores = { C: 0, N: 0, R: 0, D: 0, E: 0, I: 0, A: 0, T: 0 };

    questions.forEach((question, index) => {
      const answerValue = answers[index] || 0;

      Object.entries(question.traits).forEach(([trait, weight]) => {
        // Positive answer adds to the trait, negative subtracts
        scores[trait] += answerValue * weight;
      });
    });

    // Determine the 4-letter code
    // First dimension: C vs N (Critical vs Naive)
    const firstLetter = scores.C > scores.N ? 'C' : 'N';

    // Second dimension: D vs R (Idealist vs Realist)
    const secondLetter = scores.D > scores.R ? 'D' : 'R';

    // Third dimension: E vs I (External vs Internal)
    const thirdLetter = scores.E > scores.I ? 'E' : 'I';

    // Fourth dimension: A vs T (Act vs Theory)
    const fourthLetter = scores.A > scores.T ? 'A' : 'T';

    const code = firstLetter + secondLetter + thirdLetter + fourthLetter;

    let matchedCharacter = getCharacterByCode(code);

    // If no exact match found, find the closest match
    if (!matchedCharacter) {
      // Find the character with the most matching letters
      let bestMatch = null;
      let bestScore = -1;

      characters.forEach(char => {
        let matchScore = 0;
        if (char.code[0] === code[0]) matchScore++;
        if (char.code[1] === code[1]) matchScore++;
        if (char.code[2] === code[2]) matchScore++;
        if (char.code[3] === code[3]) matchScore++;

        if (matchScore > bestScore) {
          bestScore = matchScore;
          bestMatch = char;
        }
      });

      matchedCharacter = bestMatch;
    }

    setResult({
      character: matchedCharacter,
      scores,
      code,
      dimensions: {
        CN: { C: scores.C, N: scores.N, result: firstLetter },
        RD: { R: scores.R, D: scores.D, result: secondLetter },
        EI: { E: scores.E, I: scores.I, result: thirdLetter },
        AT: { A: scores.A, T: scores.T, result: fourthLetter }
      }
    });
    setShowResult(true);
  };

  const restartTest = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  // Start screen
  if (!started) {
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

          <div className="test-preview">
            <h3>What to Expect:</h3>
            <ul>
              <li>28 questions about your worldview</li>
              <li>Questions about knowledge and truth</li>
              <li>Perspectives on reality and existence</li>
              <li>Views on ethics and philosophy's purpose</li>
            </ul>
          </div>

          <button className="start-test-btn" onClick={() => setStarted(true)}>
            Begin Assessment
          </button>
        </div>
      </div>
    );
  }

  // Result screen
  if (showResult && result) {
    return (
      <div className="test-page result-page">
        <div className="result-container">
          <h1>Your Philosophical Type</h1>

          {result.isSkeptic ? (
            <div className="skeptic-message">
              <p>You answered every question the same way...</p>
              <p>Are you sure about anything? Perhaps you're a natural Skeptic!</p>
            </div>
          ) : null}

          <div
            className="result-card"
            style={{ borderColor: result.character.color }}
          >
            <div
              className="result-code"
              style={{ backgroundColor: result.character.color }}
            >
              {result.character.code}
            </div>
            <h2>{result.character.name}</h2>
            <p className="result-subtitle">{result.character.subtitle}</p>
            <p className="result-description">{result.character.shortDescription}</p>
          </div>

          {!result.isSkeptic && (
            <div className="dimension-scores">
              <h3>Your Dimensions</h3>
              <div className="dimension-bars">
                <DimensionBar
                  leftLabel="Critical"
                  rightLabel="Naive"
                  leftScore={result.scores.C}
                  rightScore={result.scores.N}
                  color={result.character.color}
                />
                <DimensionBar
                  leftLabel="Idealist"
                  rightLabel="Realist"
                  leftScore={result.scores.D}
                  rightScore={result.scores.R}
                  color={result.character.color}
                />
                <DimensionBar
                  leftLabel="External"
                  rightLabel="Internal"
                  leftScore={result.scores.E}
                  rightScore={result.scores.I}
                  color={result.character.color}
                />
                <DimensionBar
                  leftLabel="Act"
                  rightLabel="Theory"
                  leftScore={result.scores.A}
                  rightScore={result.scores.T}
                  color={result.character.color}
                />
              </div>
            </div>
          )}

          <div className="result-actions">
            <Link
              to={`/character/${result.character.id}`}
              className="learn-more-btn"
              style={{ backgroundColor: result.character.color }}
            >
              Learn More About {result.character.name}
            </Link>
            <button className="retake-btn" onClick={restartTest}>
              Retake Test
            </button>
            <Link to="/" className="explore-btn">
              Explore All Archetypes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const question = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  return (
    <div className="test-page question-page">
      <div className="question-container">
        <div className="progress-section">
          <div className="progress-text">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="question-content">
          <h2 className="question-text">{question.text}</h2>

          <div className="answer-slider">
            <div className="slider-labels">
              <span>Strongly Agree</span>
              <span>Strongly Disagree</span>
            </div>
            <div className="slider-options">
              {answerOptions.map((option) => (
                <button
                  key={option.value}
                  className={`slider-option ${currentAnswer === option.value ? 'selected' : ''}`}
                  onClick={() => handleAnswer(option.value)}
                  title={option.label}
                >
                  <span className="option-dot" />
                  <span className="option-label">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-btn prev-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            className="nav-btn next-btn"
            onClick={handleNext}
            disabled={currentAnswer === undefined}
          >
            {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

function DimensionBar({ leftLabel, rightLabel, leftScore, rightScore, color }) {
  // Determine which side "won"
  const leftWon = leftScore > rightScore;
  const isTie = leftScore === rightScore;

  // Calculate percentages based on the difference
  const diff = Math.abs(leftScore - rightScore);
  const maxPossible = Math.max(Math.abs(leftScore), Math.abs(rightScore), 1);

  // Calculate percentage from 50% (even) to near 100% (dominant)
  const dominance = Math.min(diff / (maxPossible * 2), 0.45);

  let leftPercent, rightPercent;
  if (isTie) {
    leftPercent = 50;
    rightPercent = 50;
  } else if (leftWon) {
    leftPercent = 50 + (dominance * 100);
    rightPercent = 50 - (dominance * 100);
  } else {
    leftPercent = 50 - (dominance * 100);
    rightPercent = 50 + (dominance * 100);
  }

  // Ensure minimum visibility (at least 10% on each side)
  leftPercent = Math.max(10, Math.min(90, leftPercent));
  rightPercent = 100 - leftPercent;

  // Round for display
  const leftDisplay = Math.round(leftPercent);
  const rightDisplay = Math.round(rightPercent);

  // Meeting point position: if left is 60%, meeting point should be at 40% from left
  // (closer to the left/winning side)
  const meetingPosition = rightPercent;

  // Create a lighter version of the color for the losing side
  const lighterColor = color + '40'; // 40 is hex for ~25% opacity

  return (
    <div className="dimension-bar">
      <div className="dimension-row">
        <span
          className={`dimension-label left ${leftWon && !isTie ? 'winner' : ''}`}
          style={leftWon && !isTie ? { borderColor: color } : {}}
        >
          {leftLabel}
        </span>
        <div className="bar-container">
          <div
            className="bar-left"
            style={{
              width: `${meetingPosition}%`,
              backgroundColor: leftWon ? color : lighterColor
            }}
          />
          <div
            className="meeting-point"
            style={{ left: `${meetingPosition}%` }}
          >
            <span className="percentage-display">
              {leftDisplay}% | {rightDisplay}%
            </span>
            <div className="meeting-circle" style={{ borderColor: color }} />
          </div>
          <div
            className="bar-right"
            style={{
              width: `${leftPercent}%`,
              backgroundColor: !leftWon ? color : lighterColor
            }}
          />
        </div>
        <span
          className={`dimension-label right ${!leftWon && !isTie ? 'winner' : ''}`}
          style={!leftWon && !isTie ? { borderColor: color } : {}}
        >
          {rightLabel}
        </span>
      </div>
    </div>
  );
}

export default TestPage;
