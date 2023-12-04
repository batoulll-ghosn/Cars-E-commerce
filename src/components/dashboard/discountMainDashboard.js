import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCars} from '../actions/car';
import userEvent from "@testing-library/user-event";
import '../styles/discount.css';
const Discount = () => {
 const cars = useSelector((state) => state.cars);
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getAllCars());
 }, [dispatch]);

 return (
   <div>
     {cars.loading && <div>loading </div>}
     {!cars.loading && cars.error ? <div>Error: {cars.error}</div> : null}
     <div className="car-grid">
       {cars.map((car) => (
         <div className='in-it' key={car._id}>
           <h1>{car.company} {car.carName}</h1>
           <div className='in-itt'><p>{car.discount}</p><img src={car.files[0]}/></div>
           <p>{car.type}</p>
           <p>{car.description}</p>
           <p>{car.color}</p>
           
         </div>
       ))}
     </div>
   </div>
 );
};

export default Discount;
