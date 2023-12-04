import React from "react";
import "../styles/latestCars.css";
import car1 from "../styles/car1.png";
import camaro from "../styles/camaro.png";
const LatestCars = () => {
  return (
    <div className="LatestCars">
      <div className="title">our latest cars</div>
      <div className="cadre">
        <img className="cadre-car1" src={car1}/>
        <img className="cadre-car2" src={camaro}/>
        
      </div>
      <div className="names">
            <div className="name1">Maserati</div>
            <div className="name2">Chevrolet Camaro</div>
        </div>
    </div>
  );
};

export default LatestCars;
