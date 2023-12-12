import { useState } from 'react';
import Menu from './Menu';
import Orders from './Orders';
import Cars from './Cars';
 export default function SellerDashboard(){
    const [activePage, setActivePage] = useState('orders');
    const handleMenuClick = (page) => {
        setActivePage(page);
    };
    return (
        <>
        <Menu/>
        <div className="ad-menu-and-content ">

            <div className="ad-menu">
              
                <div className="ad-menu-content">
                  
                    <div className="ad-menu-item1">
                        <a href="#overview" onClick={() => handleMenuClick('orders')}><img className ='ad-menu-item1-img' src='./images/home-page-svgrepo-com.svg' /> Overview</a>
                    </div>
                    <div className="ad-menu-item2">
                        <a href="#orders" onClick={() => handleMenuClick('cars')}><img className ='ad-menu-item1-img' src='./images/online-shop-svgrepo-com.svg' />   Orders</a>
                    </div>
                </div>
            </div>
            <div id="ad-content">
                {activePage === 'orders' && <Orders />}
                {activePage === 'cars' && <Cars />}
            </div>
        </div>
        </>
    )
}