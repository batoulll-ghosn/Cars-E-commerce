import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCars } from '../actions/car';
import '../styles/discount.css';
import ReactPaginate from 'react-paginate';

const Discount = () => {
 const cars = useSelector((state) => state.cars);
 const dispatch = useDispatch();
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 4;

 useEffect(() => {
   dispatch(getAllCars());
 }, [dispatch]);

 const totalPages = Math.ceil(cars.length / itemsPerPage);

 const handlePageChange = (pageNumber) => {
   setCurrentPage(pageNumber);
 };

 const indexOfLastCar = currentPage * itemsPerPage;
 const indexOfFirstCar = indexOfLastCar - itemsPerPage;
 const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

 return (
   <div>
     {cars.loading && <div>loading </div>}
     {!cars.loading && cars.error ? <div>Error: {cars.error}</div> : null}
     <div className="car-grid">
       {currentCars.map((car) => (
         <div className='in-it' key={car._id}>
           <h1> {car.carName}</h1>
           <div className='in-itt'><p className='ds-the-red'>{car.discount}%</p>
           <img src={car.files[0]}/>
           </div>
           <div className='in-it-down-one'><div>Type: {car.type}<br/>
           color: {car.color}</div>
           <div>
            <p className='in-it-mashtoube'>${car.sellingPrice}</p><br/>
            <h2>${((car.sellingPrice)-(car.sellingPrice*(car.discount/100)))}</h2>
            </div>
            </div>
         </div>
       ))}
     </div>
     <ReactPaginate
       previousLabel={'<'}
       nextLabel={'>'}
       breakLabel={'...'}
       breakClassName={'break-me'}
       pageCount={totalPages}
       marginPagesDisplayed={2}
       pageRangeDisplayed={5}
       onPageChange={({ selected }) => handlePageChange(selected + 1)}
       containerClassName={'pagination'}
       subContainerClassName={'pages pagination'}
       activeClassName={'activePageNumber'}
       pageClassName={'pageNumber'}
     />
   </div>
 );
};

export default Discount;
