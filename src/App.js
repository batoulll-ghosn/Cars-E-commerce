import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/style.css';
import About from './components/mainComponents/AboutSection';
import AboutPage from './components/mainComponents/AboutPage';
import NavBar from './components/mainComponents/NavBar';
import FAQ from './components/mainComponents/FAQsection';
import Footer from './components/mainComponents/Footer';
import Dashboard from './components/dashboard/mainAdminDashboard';
import Header from './components/mainComponents/Header';
import CarsPage from './components/mainComponents/CarsPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/navbar" element={<NavBar/>} /> */}
          <Route path="/" element={ <> <NavBar/><Header/><About /><FAQ/><Footer/> </>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
