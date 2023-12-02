import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Overview from './overview'
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
                  
                    <div className="ad-menu-item">
                        <a href="#overview" onClick={() => handleMenuClick('overview')}>Overview</a>
                    </div>
                  
                </div>
            </div>
            <div id="ad-content">
               
                {activePage === 'overview' && <Overview />}
      
            </div>
        </div>
        </>
    );
}

export default Dashboard;