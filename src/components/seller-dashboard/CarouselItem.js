import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item" >
      <div className="coursel-item-img"><img src={item.files[0]} alt='car' className="car-image" /></div>
          <div className="item-info">
            <div>Company Name: {item.company}</div>
            <div>Car Name: {item.carName}</div>
            <div>Date Of Release: {item.DOR}</div>
            <div>Selling Price: {item.sellingPrice}$</div>
          </div>
    </div>
  );
};