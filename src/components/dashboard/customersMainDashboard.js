import React, { useEffect, useState } from 'react';
import '../styles/customersOfDash.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsers, deleteUser, register, updateUser } from '../actions/user';

function MainOfCustomers() {
 const users = useSelector((state) => state.users);
 const dispatch = useDispatch();
 const [AddshowPopup, setAddShowPopup] = useState(false);
 const [UpdateshowPopup, setUpdateShowPopup] = useState(false);
 const [currentUser, setCurrentUser] = useState(null);
 const [passwordShown, setPasswordShown] = useState({});
 const [formData, setFormData] = useState({
   fullName: '',
   phoneNumber: '',
   email: '',
   password: '',
   role: '',
 });

 useEffect(() => {
 dispatch(getAllUsers());
 }, [dispatch]);

 const handleUpdate = (user) => {
 setCurrentUser(user);
 setFormData(user);
 setUpdateShowPopup(true);
 };

 const handleDelete = (user) => {
 dispatch(deleteUser(user._id));
 };

 const handleAddClose = () => {
 setAddShowPopup(false);
 };
const handleUpdateClose =() => {
    setUpdateShowPopup(false);
}

 const handlePasswordVisibility = (user) => {
 setPasswordShown({
   ...passwordShown,
   [user._id]: !passwordShown[user._id],
 });
 };
 const handleChange = (event) => {
   setFormData({
     ...formData,
     [event.target.name]: event.target.value,
   });
 };
 
 const handleSubmit = (event) => {
    event.preventDefault();
    if (currentUser) {
      dispatch(updateUser(currentUser._id, formData.fullName, formData.phoneNumber, formData.email, formData.password, formData.role));
    } else {
      dispatch(register(formData.fullName, formData.phoneNumber, formData.email, formData.password, formData.role));
    }
    setAddShowPopup(false);
    setUpdateShowPopup(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      password: '',
      role: '',
    });
    setCurrentUser(null);
   };
   
   
   

 return (
  <div className='cur-component'>
    <div className='cur-third'>
      <button className='cur-addcar-button' onClick={() => setAddShowPopup(true)}>+ Add User</button>
      {AddshowPopup && (
         <form onSubmit={handleSubmit}>
         <div className='cur-addpopup'>
           <div className='cur-addpopup-head'><h2>Add a User</h2><span className='cr-addpopup-close' onClick={handleAddClose}> &times;</span></div>
           <div className='cur-addpopup-first'>
             <input type='text' placeholder=' Full Name' name='fullName' onChange={handleChange}/>
           </div>
           <hr className='cur-horizontal-line'></hr>
           <div className='cur-addpopup-first'>
             <input type='text' placeholder=' Email' name='email' onChange={handleChange}/>
           </div>
           <hr className='cur-horizontal-line'></hr>
           <div className='cur-addpopup-first'>
             <input type='text' placeholder=' Phone Number' name='phoneNumber' onChange={handleChange}/>
           </div>
           <hr className='cur-horizontal-line'></hr>
           <div className='cur-addpopup-first'>
             <input type='text' placeholder=' Password' name='password' onChange={handleChange}/>
           </div>
           <hr className='cur-horizontal-line'></hr>
           <div className='cur-addpopup-first'>
             <input type='text' placeholder=' Role' name='role' onChange={handleChange}/>
           </div>
           <div><button className='cr-addcar-buttonn' type='submit'>Add</button></div>
         </div>
        </form>
        
     )}
     {UpdateshowPopup && (
 <form onSubmit={handleSubmit}>
   <div className='cur-addpopup'>
     <div className='cur-addpopup-head'>
       <h2>Edit a User</h2>
       <span className='cr-addpopup-close' onClick={handleUpdateClose}> &times;</span>
     </div>
     <div className='cur-addpopup-first'>
       <input type='text' placeholder=' Full Name' name='fullName' value={formData.fullName} onChange={handleChange}/>
     </div>
     <hr className='cur-horizontal-line'></hr>
     <div className='cur-addpopup-first'>
       <input type='text' placeholder=' Email' name='email' value={formData.email} onChange={handleChange}/>
     </div>
     <hr className='cur-horizontal-line'></hr>
     <div className='cur-addpopup-first'>
       <input type='text' placeholder=' Phone Number' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}/>
     </div>
     <hr className='cur-horizontal-line'></hr>
     <div className='cur-addpopup-first'>
       <input type='text' placeholder=' Password' name='password' value={formData.password} onChange={handleChange}/>
     </div>
     <hr className='cur-horizontal-line'></hr>
     <div className='cur-addpopup-first'>
       <input type='text' placeholder=' Role' name='role' value={formData.role} onChange={handleChange}/>
     </div>
     <div><button className='cr-addcar-buttonn' type='submit'>Done</button></div>
   </div>
 </form>
)}

      <div className='cur-third-main'><div className='cur-third-div-table'>
        <table className='cur-third-table'>
          <thead>
            <tr>
              <th className='cur-third-table-th'>Name</th>
              <th className='cur-third-table-th'>Email</th>
              <th className='cur-third-table-th'>Password</th>
              <th className='cur-third-table-th'>Role</th>
              <th className='cur-third-table-th'>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
               <td>{user.fullName}</td>
               <td>{user.email}</td>
               <td>
                {passwordShown[user._id] ? user.password : '*************'}
                <button onClick={() => handlePasswordVisibility(user)}>Show/Hide</button>
               </td>
               <td>{user.role}</td>
               <td>
                <button onClick={() => handleUpdate(user)}>Update</button>
                <button onClick={() => handleDelete(user)}>Delete</button>
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

export default MainOfCustomers;
