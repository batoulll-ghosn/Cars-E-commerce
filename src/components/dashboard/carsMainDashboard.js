import React, { useEffect, useState } from 'react';
import '../styles/carsOfDash.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllCars, addCar,removeCar } from '../actions/car';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

function MainOfCars() {
 const cars = useSelector((state) => state.cars);
 const dispatch = useDispatch();
 const [AddshowPopup, setAddShowPopup] = useState(false);
 const [UpdateshowPopup, setUpdateShowPopup] = useState(false);
 useEffect(() => {
   dispatch(getAllCars());
 }, [dispatch]);
 const handleUpdate = (car) => {
  setUpdateShowPopup(true)
 };

 const handleDelete = (car) => {
  dispatch(removeCar(car._id));
 };
 

 const handleAddClose = () => {
   setAddShowPopup(false);
 };
const handleUpdateClose = () =>{
  setUpdateShowPopup(false);
}

const handleSubmit = (event) => {
  event.preventDefault();
 
  const carName = event.target.elements.carName.value;
  const company = event.target.elements.company.value;
  const type = event.target.elements.type.value;
  const description = event.target.elements.description.value;
  const initialPrice = event.target.elements.price.value;
  const sellingPrice = event.target.elements.price.value;
  const TVA = event.target.elements.TVA.value;
  const discount = event.target.elements.discount.value;
  const quantity = event.target.elements.quantity.value;
  const files = event.target.elements.files.files;
  const DOR = event.target.elements.DOR.value;
  const color = event.target.elements.color.value;
 
  const formData = new FormData();
  formData.append('carName', carName);
  formData.append('company', company);
  formData.append('type', type);
  formData.append('description', description);
  formData.append('initialPrice', initialPrice);
  formData.append('sellingPrice', sellingPrice);
  formData.append('TVA', TVA);
  formData.append('discount', discount);
  formData.append('quantity', quantity);
  formData.append('files', files[0]); 
  formData.append('DOR', DOR);
  formData.append('color', color);
 
  axios.post('http://localhost:5000/cars/addCar', formData)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
 setAddShowPopup(false);
 };
 
   

 return (
 <div className='cr-component'>
   <div className='cr-third'>
     <button className='cr-addcar-button' onClick={() => setAddShowPopup(true)}>+ Add Car</button>
      {AddshowPopup && (
         <form onSubmit={handleSubmit}>
        <div className='cr-addpopup'>

         <div className='cr-addpopup-head'><h2>Add a Car</h2><span className='cr-addpopup-close' onClick={handleAddClose}> &times;</span></div>
         <div className='cr-addpopup-first'>
          <input type='text' placeholder=' Car Name' name='carName'/>
          <input type='text' placeholder=' Company' name='company'/>
          <input type='text' placeholder=' Type' name='type'/>
          <input type='number' placeholder=' Quantity' name='quantity'/>
         </div>
         <hr className='cr-horizontal-line'></hr>
         <div className='cr-addpopup-first'>
          <input type='text' placeholder=' DOR' name='DOR'/>
          <input type='text' placeholder=' Price'  name='price'/>
          
          <input type='text' placeholder=' TVA' name='TVA'/>
          <input type='number' placeholder=' Discount' name='discount'/></div>
          <hr className='cr-horizontal-line'></hr>
         <div className='cr-addpopup-first'>
          <textarea placeholder=' Description' name='description'/>
         </div>
         <hr className='cr-horizontal-line'></hr>
         <div>
         <label>Image:</label> <input type='file' name='files'/>
         <label>3D:</label> <input type='file' />
         <label>Sound:</label> <input type='file' />
          <label>Color: </label><input type='color' name='color'/>
        </div>
        <div><button className='cr-addcar-buttonn' type='submit'>Add</button></div>
       </div>
       </form>
     )}
     {UpdateshowPopup && (
         <form onSubmit=''>
        <div className='cr-addpopup'>

         <div className='cr-addpopup-head'>
          <h2>Edit a Car</h2><span className='cr-addpopup-close' onClick={handleUpdateClose}> &times;</span></div>
         <div className='cr-addpopup-first'>
          <input type='text' placeholder=' Car Name' name='carName'/>
          <input type='text' placeholder=' Company' name='company'/>
          <input type='text' placeholder=' Type' name='type'/>
          <input type='number' placeholder=' Quantity' name='quantity'/>
         </div>
         <hr className='cr-horizontal-line'></hr>
         <div className='cr-addpopup-first'>
          <input type='text' placeholder=' DOR' name='DOR'/>
          <input type='text' placeholder=' Price'  name='price'/>
          
          <input type='text' placeholder=' TVA' name='TVA'/>
          <input type='number' placeholder=' Discount' name='discount'/></div>
          <hr className='cr-horizontal-line'></hr>
         <div className='cr-addpopup-first'>
          <textarea placeholder=' Description' name='description'/>
         </div>
         <hr className='cr-horizontal-line'></hr>
         <div>
         <label>Image:</label> <input type='file' name='files'/>
         <label>3D:</label> <input type='file' />
         <label>Sound:</label> <input type='file' />
          <label>Color: </label><input type='color' name='color'/>
        </div>
        <div><button className='cr-addcar-buttonn' type='submit'>Done</button></div>
       </div>
       </form>
     )}
     <div className='cr-third-main'><div className='cr-third-div-table'>
       <table className='cr-third-table'>
         <thead>
           <tr>
             <th className='cr-third-table-th'>Title</th>
             <th className='cr-third-table-th'>Qty</th>
             <th className='cr-third-table-th'>Price</th>
             <th className='cr-third-table-th'>Update/Delete</th>
           </tr>
         </thead>
         <tbody>
           {cars.map((car) => (
             <tr key={car._id}>
              <td>{car.carName}</td>
              <td>{car.quantity}</td>
              <td>{car.initialPrice}</td>
              <td>
               <img className='crMn-carUpdate' src='./images/pen-square-svgrepo-com (1).svg' onClick={() => handleUpdate(car)}/>
               <img className='crMn-carDelete' src='./images/bin-svgrepo-com.svg' onClick={() => handleDelete(car)}/>
              </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 </div>
 </div>
 );
}

export default MainOfCars;
