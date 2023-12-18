import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Footer from "../mainComponents/Footer";
import "../styles/carsPage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import oops from "../styles/oops.svg";
import Example from "../Loading/Example";
import {AutoComplete} from "antd";

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
  const [isLoading, setIsLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getAllCars());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (selector && selector !== "all" && selector !== "Filter By") {
      handleSuggestions(selector);
    }
  }, [dispatch, selector]);

  if (selector === "all") {
    dispatch(getAllCars());
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (selector && selector !== "Filter By") {
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
    } else {
      alert("Please choose a valid filter before searching.");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const handleSuggestions = (selector) => {
    axios
      .post(`http://localhost:5000/cars/getAllCarsBySelector`, { selector })
      .then((response) => {
        setSuggestions((response.data.cars
          .map((car) =>Object.values(car)[1])
          .filter((value, index, element) => element.indexOf(value) === index))
          .map((element)=>{
            return {value:element}
          }));
      })
      .catch((error) => {
        console.error(error);
      });
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
            <AutoComplete
              placeholder={
                selector && selector !== "all" && selector !== "Filter By"
                  ? "Type here to search"
                  : "Choose a filter first"
              }
              style={{width:"180px",backgroundColor:"transparent"}}
              
              options={suggestions}
              filterOption={true}
              onSelect={(e) => setSearch(e)}
              onKeyDown={handleEnter}
              onSearch={(e) => setSearch(e)}
              disabled={
                !selector || selector === "Filter By" || selector === "all"
              }
            />
            <img
              className="cars-search-icon"
              src="/images/search-5-svgrepo-com.svg"
              onClick={(e) => handleSearch(e)}
            />
          </div>
        </div>
        {isLoading ? (
          <Example />
        ) : Array.isArray(cars) && cars.length > 0 ? (
          <div className="cars-allcars">
            {cars.map((car) => (
              <div key={car._id} className="cars-card">
                <img
                  src={car.files[0]}
                  className="cars-image"
                  alt="jeep purple"
                />
                <h1 className="cars-car-name">{car.carName}</h1>
                <button className="cars-shop-now">View More</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="cars-not-found">
            <img src={oops} className="oops-car" />
            <h2>OOPS!!No cars found</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CarsPage;


