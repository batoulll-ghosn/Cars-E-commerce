import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/style.css';
import About from './components/mainComponents/AboutSection';
import AboutPage from './components/mainComponents/AboutPage';
import NavBar from './components/mainComponents/NavBar';
import FAQ from './components/mainComponents/FAQsection';
import Footer from './components/mainComponents/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/navbar" element={<NavBar/>} /> */}
          <Route path="/" element={ <> <NavBar/><About /><FAQ/><Footer/> </>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
