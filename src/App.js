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
import Testimonial from './components/mainComponents/Carousel';
import CarsPage from './components/mainComponents/CarsPage';
import CarViewer from './components/mainComponents/CarViewer';
import ContactPage from './components/mainComponents/ContactPage';
// import { toast, Toaster } from "react-hot-toast";
import Review from './components/mainComponents/Review';
import Profile from './components/mainComponents/Profile';
import CustomerDash from './components/dashboard/CustomerDash';
import SellerDashboard from './components/seller-dashboard/SellerDashboard';
import CreditCard  from './components/mainComponents/CreditCard';
import { Toaster } from 'react-hot-toast';
import Cart from './components/mainComponents/Cart';
import PageNotFound from './components/mainComponents/PageNotFound';
import {getUserRole} from './components/mainComponents/GetData';
function App() {
  const role =getUserRole();
  // const id =localStorage.getItem("id");
  return (
    <Router>
      <div className="App">
      <Toaster toastOptions={{ duration: 5000 }} />
      
        <Routes>
          <Route path="/" element={ <> <NavBar/><Header/><About/><LatestCars/><FAQ/><Testimonial /><Footer/> </>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage/>}/>
          <Route path="/3d-viewer/:id" element={role === 'customer'?<CarViewer /> : <PageNotFound/>} />
          <Route path="/contactUs" element={<ContactPage />} />
          <Route path="/dashboard" element={role === 'admin'?<Dashboard /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={role === 'customer' ?<Cart /> : <PageNotFound/>} />
          <Route path="/review" element={role === 'customer' ?<Review /> : <Login/>} />
          <Route path="/profile" element={role === 'customer' ?<Profile /> : <Login/>} />
          <Route path="/customer" element={role === 'customer' ?<CustomerDash /> : <Login/>} />
          <Route path="/sellerDashboard" element={role === 'seller' ?<SellerDashboard /> : <Login/>} />
          <Route path="/creditCard" element={role === 'customer' ?<CreditCard /> : <PageNotFound/>} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
