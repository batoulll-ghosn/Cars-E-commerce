import React, { useEffect, useState, useMemo } from "react";
import NavBar from "./NavBar";
import Footer from "../mainComponents/Footer";
import "../styles/carsPage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAllCars,
  getCarsByCompany,
  getCarByName,
  GetCarsByColor,
  getCarsByType,
} from "../actions/car";

const CarsPage = () => {
  const [selector, setSelector] = useState("");
  const [search, setSearch] = useState("");
  let cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
    
  }, [dispatch]);
  console.log(cars[cars.length-1])
  const lastElement=cars[cars.length-1];
  let newCars = [];
  let car = [];
  const handleSearch = (e) => {
    e.preventDefault();
    
    cars.forEach((element) => {
      if (selector == "type") {
        if (!car.includes(element.type)) car.push(element.type);
      } else if (selector == "carName") {
        if (!car.includes(element.carName)) car.push(element.carName);
      } else if (selector == "DOR") {
        if (!car.includes(element.DOR)) car.push(element.DOR);
      } else if (selector == "company") {
        if (!car.includes(element.company)) car.push(element.company);
      } else if (selector == "color") {
        if (!car.includes(element.color)) car.push(element.color);
      }
    });

    if (selector == "type") {
     dispatch(getCarsByType(search))
      
      // console.log(cars)
    }else if (selector == "all") {
      dispatch(getAllCars())
      
    } else if (selector == "carName") {
      dispatch(getCarByName(search))
      
    } else if (selector == "company") {
      dispatch(getCarsByCompany)(search)
    } else if (selector == "color") {
     dispatch(GetCarsByColor(search))
    }
    // console.log(newCars);
    
  };

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
          <div className="cars-search-bar">
            <input
              className="cars-search-bar"
              placeholder="Search..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              src="/images/search-5-svgrepo-com.svg"
              onClick={(e) => handleSearch(e)}
            />
          </div>
          <div className="cars-filter-by">
            <select
              id="cars-select-Dropdown"
              className="cars-search-bar"
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
        </div>
        <div className="cars-allcars">
          { Array.isArray(lastElement) ?(
          lastElement.map((car) => ( 
            <div key={car._id} className="cars-card">
              <img
                src={car.files[0]}
                className="cars-image"
                alt="jeep purple"
              />
              <button
                className="cars-shop-now"
              >
                Shop Now
              </button>
            </div>
          ))
          ):cars.map((car) => ( 
                <div key={car._id} className="cars-card">
                  <img
                    src={car.files[0]}
                    className="cars-image"
                    alt="jeep purple"
                  />
                  <button
                    className="cars-shop-now"
                    // onClick={}
                  >
                    Shop Now
                  </button>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarsPage;
