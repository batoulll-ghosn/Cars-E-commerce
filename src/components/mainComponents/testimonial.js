import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from './Carousel'; 
import { getAllCars, addCar, removeCar } from '../actions/car';

const Car = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  const renderCar = (car) => (
    <div className="or-div-table">
      <table className="or-third-table">
        <tbody>
          <tr key={car._id}>
            <td>{car.carName}</td>
            <td>{car.company}</td>
            <td>{car.type}</td>
            <td>{car.description}</td>
            <td>{car.color}</td>
            {car.files.map((file) => (
              <img src={file} alt={car.carName} />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      {cars.loading && <div>Loading...</div>}
      {!cars.loading && cars.error ? <div>Error: {cars.error}</div> : null}
      <Carousel cars={cars} renderCar={renderCar} />
    </div>
  );
};

export default Car;
