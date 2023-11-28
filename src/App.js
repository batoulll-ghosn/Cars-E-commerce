import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/mainComponents/AboutSection';
import AboutPage from './components/mainComponents/AboutPage';
import NavBar from './components/mainComponents/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
