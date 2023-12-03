import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Overview from './overviewMainDashboard';
import Orders from './ordersMainDashboard';
import Cars from'./carsMainDashboard';
import Customers from './customersMainDashboard';
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
                        <a href="#overview" onClick={() => handleMenuClick('overview')}>Overview</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#orders" onClick={() => handleMenuClick('orders')}>Orders</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#cars" onClick={() => handleMenuClick('cars')}>Cars</a>
                    </div>
                    <div className="ad-menu-item">
                        <a href="#customer" onClick={() => handleMenuClick('customer')}>Customer</a>
                    </div>
                </div>
            </div>
            <div id="ad-content">
               
                {activePage === 'overview' && <Overview />}
                {activePage === 'orders' && <Orders />}
                {activePage === 'cars' && <Cars />}
                {activePage === 'customer' && <Customers />}
            </div>
        </div>
        </>
    );
}

export default Dashboard;