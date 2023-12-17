import React, { useEffect, useState} from "react";
import NavBar from "./NavBar";
import Footer from "../mainComponents/Footer";
import "../styles/carsPage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import oops from '../styles/oops.svg';
import {
  getAllCars,
  getCarsByCompany,
  getCarByName,
  GetCarsByColor,
  getCarsByType,
} from "../actions/car";
import CarViewer from "./CarViewer";
import { Link } from "react-router-dom";

const CarsPage = () => {
  const [selector, setSelector] = useState("");
  const [search, setSearch] = useState("");
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  if (selector === "all") {
    dispatch(getAllCars());
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (selector === "all") {
      dispatch(getAllCars());
    } else if (selector === "type") {
      dispatch(getCarsByType(search));
    } else if (selector === "carName") {
      dispatch(getCarByName(search));
    } else if (selector === "company") {
      dispatch(getCarsByCompany(search));
    } else if (selector === "color") {
      dispatch(GetCarsByColor(search));
    }
    setSearch("");
  };

  // const carViewerhandling = (id) => {
  //   return() =>{
  //     return <CarViewer  id={id}/>
  //   }
  // }

  return (
    <div>
      <NavBar />
      <div className="cars-background">
        <div className="cars-search-menu">
          <div className="cars-company">
            <img
              src="/images/mercedes-benz-alt-svgrepo-com.svg"
              className="cars-logo"
              alt="mercedes"
            />
            <img
              src="/images/bmw-svgrepo-com.svg"
              className="cars-logo"
              alt="bmw"
            />
            <img
              src="/images/chevrolet-svgrepo-com.svg"
              className="cars-logo"
              alt="chevrolet"
            />
            <img
              src="/images/audi-svgrepo-com.svg"
              className="cars-logo"
              alt="audi"
            />
            <img
              src="/images/maserati-svgrepo-com.svg"
              className="cars-logo"
              alt="maserati"
            />
            <img
              src="/images/lamborghini-alt-svgrepo-com.svg"
              className="cars-logo"
              alt="lamborghini"
            />
            <img
              src="/images/jeep-svgrepo-com.svg"
              className="cars-logo"
              alt="lamborghini"
            />
            <img
              src="/images/porsche-svgrepo-com.svg"
              className="cars-logo"
              alt="lamborghini"
            />
          </div>
          <div>
            <select
              id="cars-select-Dropdown"
              className="cars-filter-by"
              name="cars-Dropdown"
              onChange={(e) => setSelector(e.target.value)}
            >
              <option value="Filter By">Filter By</option>
              <option value="all">All cars</option>
              <option value="carName">Car Name</option>
              <option value="company">Company</option>
              <option value="DOR">DOR</option>
              <option value="type">Type</option>
              <option value="color">Color</option>
            </select>
          </div>
          <div className="cars-search-bar">
            <input
              className="cars-search-bar-input"
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              className="cars-search-icon"
              src="/images/search-5-svgrepo-com.svg"
              onClick={(e) => handleSearch(e)}
            />
          </div>
        </div>
        
          {Array.isArray(cars) && cars.length > 0 ? (
            <div className="cars-allcars">
             
            {cars.map((car) => (
              <div key={car._id} className="cars-card">
                <img
                  src={car.files[0]}
                  className="cars-image"
                  alt="jeep purple"
                />
                <h1 className="cars-car-name">{car.carName}</h1>
                  <Link to={`/3d-viewer/${car._id}`}  className="cars-shop-now">
                  </Link>
                
              </div>
              
            ))}
            </div>
          ) : (
            <div className="cars-not-found">
                <img src={oops} className="oops-car"/>
                <h2>OOPS!!No cars found</h2>
            </div>
          )}
        
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CarsPage;
