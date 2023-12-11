import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from '../mainComponents/Footer';
import '../styles/carsPage.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCars } from "../actions/car";


const CarsPage = () => {

  const [search,setSearch] = useState;
  const [Car,setCar] = useState;

    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    const handleSearchChange = (e) => {
      const { name, value } = e.target;
      setSearch({
        ...search,
        [name]: value,
      });
    };
    
    const handleSearch = () => {
      if (search.searchBy === "CarName") {
        const filteredCars = cars.filter(
          (Car) => Car.CarName === search.searchTerm
        );
        setCar(filteredCars);
      } else if (search.searchBy === "company") {
        const filteredCars = cars.filter((Car) =>
          Car.company.includes(search.searchTerm)
        );
        setCar(filteredCars);
      }
    };
  
    const resetSearch = () => {
      setSearch({
        searchBy: "CarName",
        searchTerm: "",
      });
  

  return (
    <div>
     <NavBar/>
    <div className='cars-background'>
     <div className='cars-search-menu'>
     <div className='cars-company'>

        <img src="/images/mercedes icon.png" className='cars-logo' alt="mercedes"/>
        <img src="/images/BMW.svg.png" className='cars-logo' alt="bmw"/>
        <img src="/images/chevrolet png.png" className='cars-logo' alt="chevrolet"/>
        <img src="/images/audi png.png" className='cars-logo' alt="audi"/>
        <img src="/images/maserati png.png" className='cars-logo' alt="maserati"/>
        <img src="/images/cadillac png.png" className='cars-logo' alt="cadillac"/>
        </div>
        <div className='cars-search'>

        <div className="seaching">
        <label>Search by:</label>
        <select
          name="searchBy"
          onChange={handleSearchChange}
          value={search.searchBy}
        >
          <option value="CarName">CarName</option>
          <option value="company">Company</option>
          
        </select>
        <input
          className="searching-text"
          type="text"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleSearchChange}
        />
        <button className="searching-button-search" onClick={handleSearch}>
          Search
        </button>
        <button className="searching-button-reset" onClick={resetSearch}>
          Reset
        </button>
      </div>
        
        
        </div>
     </div>
     <div className='cars-allcars'>
        {cars.map((car) =>(

        <div  key={car._id} className='cars-card'>
            <img src={car.files[0]} className='cars-image' alt="jeep purple"/>
            <button className='cars-shop-now'
            // onClick={}
            >Shop Now</button>
        </div>
        ))}
      
     </div>

    </div>
    <Footer/>
    </div>
  )
}}

export default CarsPage;
