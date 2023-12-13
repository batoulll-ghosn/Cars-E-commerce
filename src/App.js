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
import ContactPage from './components/mainComponents/ContactPage';
import Example from './components/Loading/Example';
import { toast, Toaster } from "react-hot-toast";


function App() {
  return (
    <Router>
      <div className="App">
      <Toaster toastOptions={{ duration: 5000 }} />
        <Routes>
          <Route path="/" element={ <> <NavBar/><Header/><About/><LatestCars/><FAQ/><Footer/> </>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/3d-viewer" element={<CarViewer />} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ex" element={<Example />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
