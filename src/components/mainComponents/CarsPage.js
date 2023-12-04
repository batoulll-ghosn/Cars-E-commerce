import React from 'react'
import NavBar from './NavBar';
import '../styles/carsPage.css';
const CarsPage = () => {
  return (
    <div>
     <NavBar/>
     <div className='cars-search-menu'><div className='cars-background'></div>

        <img src="/images/mercedes icon.png" className='cars-logo' alt="mercedes"/>
        <img src="/images/BMW.svg.png" className='cars-logo' alt="bmw"/>
        <img src="/images/chevrolet png.png" className='cars-logo' alt="chevrolet"/>
        <img src="/images/audi png.png" className='cars-logo' alt="audi"/>
        <img src="/images/maserati png.png" className='cars-logo' alt="maserati"/>
        <img src="/images/cadillac png.png" className='cars-logo' alt="cadillac"/>
        <input className='cars-search-bar'
        type='text'
        placeholder="Search..."
        />
     </div>
     <div className='cars-allcars'>
        <div className='cars-card'>
            <img src="/images/jeep png purple.png" className='cars-image' alt="jeep purple"/>
            <button className='cars-shop-now'>Shop Now</button>
        </div>
        <div className='cars-card'>
            <img src="/images/jeep png purple.png" className='cars-image' alt="jeep purple"/>
            <button className='cars-shop-now'>Shop Now</button>
        </div>
        <div className='cars-card'>
            <img src="/images/jeep png purple.png" className='cars-image' alt="jeep purple"/>
            <button className='cars-shop-now'>Shop Now</button>
        </div>
        <div className='cars-card'>
            <img src="/images/jeep png purple.png" className='cars-image' alt="jeep purple"/>
            <button className='cars-shop-now'>Shop Now</button>
        </div>
     </div>

    </div>
  )
}

export default CarsPage
