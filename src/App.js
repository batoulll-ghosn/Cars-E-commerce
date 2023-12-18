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
import CreditCard  from './components/mainComponents/CreditCard';
import { Toaster } from 'react-hot-toast';
import Cart from './components/mainComponents/Cart';
function App() {
  const token =localStorage.getItem("token");
  const id =localStorage.getItem("id");
  return (
    <Router>
      <div className="App">
        <Toaster duration="5000"/>
        <Routes>
          {console.log(token,id)}
          {/* <Route path="/navbar" element={<NavBar/>} /> */}
          <Route path="/" element={token && id && <> <NavBar/><Header/><About/><LatestCars/><FAQ/><Footer/> </>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/creditCard" element={<CreditCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
