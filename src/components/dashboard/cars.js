import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Car = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <div>
      <h2>All Cars</h2>
      {cars.loading && <div>loading </div>}
      {!cars.loading && cars.error ? <div>Error: {cars.error}</div> : null}
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <p>{car.carName}</p>
            <p>{car.company}</p>
            <p>{car.type}</p>
            <p>{car.description}</p>
            <p>{car.color}</p>
            {car.files.map((file) => (
              <img src={file} alt={car.carName} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Car;
