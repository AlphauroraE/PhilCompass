import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CharacterPage from './pages/CharacterPage';
import TestPage from './pages/TestPage';
import './App.css';

// Use base path for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={basename}>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
