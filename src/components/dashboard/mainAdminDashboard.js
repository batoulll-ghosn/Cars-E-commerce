import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overview from './overviewMainDashboard';
import Orders from '../seller-dashboard/Orders';
import Cars from'./carsMainDashboard';
import Customers from './customersMainDashboard';
import Discount from './discountMainDashboard';
import '../styles/mainAdminDashboard.css';
import Menu from './AdminDashboardMenu';
import Reviews from './reviews';
import Shipping from './Shipping';
function Dashboard() {
    const [activePage, setActivePage] = useState('overview');
    const handleMenuClick = (page) => {
        setActivePage(page);
    };
    const navigate = useNavigate();
    return (
        <>
        <Menu/>
        <div className="ad-menu-and-content ">

            <div className="ad-menu">
              
                <div className="ad-menu-content">
                  
                    <div className="ad-menu-item1">
                        <a href="#overview" onClick={() => handleMenuClick('overview')}><img className ='ad-menu-item1-img' src='./images/home-page-svgrepo-com.svg' /> Overview</a>
                    </div>
                   
                    <div className="ad-menu-item3">
                        <a href="#cars" onClick={() => handleMenuClick('cars')}><img className ='ad-menu-item1-img' src='./images/car-svgrepo-com (2).svg' />  Cars</a>
                    </div>
                    <div className="ad-menu-item4">
                        <a href="#discounts" onClick={() => handleMenuClick('discounts')}><img className ='ad-menu-item1-img' src='./images/discount-svgrepo-com.svg' /> Discounts</a>
                    </div>
                    <div className="ad-menu-item5">
                        <a href="#customer" onClick={() => handleMenuClick('customer')}><img className ='ad-menu-item1-img' src='./images/user-alt-1-svgrepo-com (1).svg' /> Customer</a>
                    </div>
                    <div className="ad-menu-item6">
                        <a href="#reviews" onClick={() => handleMenuClick('reviews')}><img className ='ad-menu-item1-img' src='./images/user-alt-1-svgrepo-com (1).svg' /> Reviews</a>
                    </div>
                    <div className="ad-menu-item7">
                        <a href="#shipping" onClick={() => handleMenuClick('shipping')}><img className ='ad-menu-item1-img' src='./images/location-pin-alt-1-svgrepo-com.svg' /> Shipment</a>
                    </div>
                </div>
            </div>
            <div id="ad-content">
                {activePage === 'overview' && <Overview />}
                
                {activePage === 'cars' && <Cars />}
                {activePage === 'discounts' && <Discount />}
                {activePage === 'customer' && <Customers />}
                {activePage === 'reviews' && <Reviews />}
                {activePage === 'shipping' && <Shipping />}
            </div>
        </div>
        </>
    );
}

export default Dashboard;