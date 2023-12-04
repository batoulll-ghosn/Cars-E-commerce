import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overview from './overviewMainDashboard';
import Orders from './ordersMainDashboard';
import Cars from'./carsMainDashboard';
import Customers from './customersMainDashboard';
import Discount from './discountMainDashboard'
import '../styles/mainAdminDashboard.css';
import Menu from './AdminDashboardMenu';

function Dashboard() {
    const [activePage, setActivePage] = useState('overview');

    const handleMenuClick = (page) => {
        setActivePage(page);
    };
    const navigate = useNavigate();
  

    return (
        <>
        <Menu />
        <div className="ad-menu-and-content ">

            <div className="ad-menu">
              
                <div className="ad-menu-content">
                  
                    <div className="ad-menu-item1">
                        <a href="#overview" onClick={() => handleMenuClick('overview')}><img className ='ad-menu-item1-img' src='./images/home-page-svgrepo-com.svg' /> Overview</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#orders" onClick={() => handleMenuClick('orders')}><img className ='ad-menu-item1-img' src='./images/online-shop-svgrepo-com.svg' />   Orders</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#cars" onClick={() => handleMenuClick('cars')}><img className ='ad-menu-item1-img' src='./images/car-svgrepo-com (1).svg' />  Cars</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#discounts" onClick={() => handleMenuClick('discounts')}><img className ='ad-menu-item1-img' src='./images/discount-svgrepo-com.svg' />Discounts</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#customer" onClick={() => handleMenuClick('customer')}><img className ='ad-menu-item1-img' src='./images/user-alt-1-svgrepo-com (1).svg' />Customer</a>
                    </div>
                </div>
            </div>
            <div id="ad-content">
                {activePage === 'overview' && <Overview />}
                {activePage === 'orders' && <Orders />}
                {activePage === 'cars' && <Cars />}
                {activePage === 'discounts' && <Discount />}
                {activePage === 'customer' && <Customers />}
            </div>
        </div>
        </>
    );
}

export default Dashboard;