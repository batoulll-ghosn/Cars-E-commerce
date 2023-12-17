import React from "react";

export const CarouselItem = ({ item }) => {
  return (
    <div className="carousel-item" >
      <div className="coursel-item-img"><img src={item.url} alt='car' className="car-image" /></div>
          <div className="item-info">
            <div>Company Name: {item.company}</div>
            <div>Car Name: {item.name}</div>
          </div>
    </div>
  );
};