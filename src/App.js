import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/styles/style.css';
import About from './components/mainComponents/AboutSection';
import AboutPage from './components/mainComponents/AboutPage';
import NavBar from './components/mainComponents/NavBar';
import FAQ from './components/mainComponents/FAQsection';
import Footer from './components/mainComponents/Footer';
import Dashboard from './components/dashboard/mainAdminDashboard';
import Header from './components/mainComponents/Header';
import Login from './components/mainComponents/Login';
import LatestCars from './components/mainComponents/LatestCars';
import CarsPage from './components/mainComponents/CarsPage';
import CarViewer from './components/mainComponents/CarViewer';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/navbar" element={<NavBar/>} /> */}
          <Route path="/" element={ <> <NavBar/><Header/><About/><LatestCars/><FAQ/><Footer/> </>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/3d-viewer" element={<CarViewer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
