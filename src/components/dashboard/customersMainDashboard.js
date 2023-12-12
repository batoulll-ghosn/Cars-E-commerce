import React, { useEffect, useState } from 'react';
import '../styles/customersOfDash.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsers, deleteUser, register, updateUser } from '../actions/user';
import { toast, Toaster } from "react-hot-toast";

function MainOfCustomers() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [AddshowPopup, setAddShowPopup] = useState(false);
  const [UpdateshowPopup, setUpdateShowPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [DeleteshowPopup, setDeleteShowPopup] = useState(false);
  const [passwordShown, setPasswordShown] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: '',
  });
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleUpdate = (user) => {
    setCurrentUser(user);
    setFormData(user);
    setUpdateShowPopup(true);
  };

  const handleAddClose = () => {
    setAddShowPopup(false);
  };

  const handleUpdateClose = () => {
    setUpdateShowPopup(false);
  };

  const OpendeletePop = (user) => {
    setSelectedUser(user);
    setDeleteShowPopup(true);
  };

  const handleDelete = () => {
    if (selectedUser) {
      dispatch(deleteUser(selectedUser._id));
      setSelectedUser(null);
      setDeleteShowPopup(false);
    }
  };

  const ClosedeletePop = () => {
    setDeleteShowPopup(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitt = (event) => {
    event.preventDefault();
    dispatch(updateUser(currentUser._id, formData.fullName, formData.email, formData.password, formData.phoneNumber, formData.role));
    setAddShowPopup(false);
    setUpdateShowPopup(false);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      role: '',
    });
    setAddShowPopup(false);
    toast.success("You have updated a user Successfully!");
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

    setAddShowPopup(false);
    toast.success("You have added a new user Successfully!");
  };

  return (
    <div className='cur-component'>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className='cur-third'>
        <button className='cur-addcar-button' onClick={() => setAddShowPopup(true)}>+ Add User</button>
        {AddshowPopup && (
          <form onSubmit={handleSubmit}>
            <div className='cur-addpopup'>
              <div className='cur-addpopup-head'>
                <h2>Add a User</h2>
                <span className='cr-addpopup-close' onClick={handleAddClose}> &times;</span>
              </div>
              <div className='cur-addpopup-first'>
                <input type='text' placeholder=' Full Name' name='fullName' onChange={handleChange} />
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <input type='text' placeholder=' Email' name='email' onChange={handleChange} />
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <input type='text' placeholder=' Phone Number' name='phoneNumber' onChange={handleChange} />
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder=' Password'
                  name='password'
                  onChange={handleChange}
                />
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <select value={formData.role} name='role' onChange={handleChange}>
                  <option value='admin'>Admin</option>
                  <option value='seller'>Seller</option>
                  <option value='customer'>Customer</option>
                </select>
              </div>
              <div><button className='cr-addcar-buttonn' type='submit' >Add</button></div>
            </div>
          </form>
        )}
        {UpdateshowPopup && (
          <form onSubmit={handleSubmitt}>
            <div className='cur-addpopup'>
              <div className='cur-addpopup-head'>
                <h2>Edit a User</h2>
                <span className='cr-addpopup-close' onClick={handleUpdateClose}> &times;</span>
              </div>
              <div className='cur-addpopup-first'>
                <input type='text' placeholder=' Full Name' name='fullName' value={formData.fullName} onChange={handleChange} />
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <input type='text' placeholder=' Email' name='email' value={formData.email} onChange={handleChange} />
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <input type='text' placeholder=' Phone Number' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <hr className='cur-horizontal-line'></hr>
              <div className='cur-addpopup-first'>
                <select value={formData.role} name='role' onChange={handleChange}>
                  <option value='admin'>Admin</option>
                  <option value='seller'>Seller</option>
                  <option value='customer'>Customer</option>
                </select>
              </div>
              <div><button className='cr-addcar-buttonn' type='submit'>Done</button></div>
            </div>
          </form>
        )}
        {(DeleteshowPopup && <div className='cr-deletepopup'><div className='cr-deletepopup-head'>
          <h2>Are You Sure You want to Delete?</h2>
          <span className='cr-deletepopup-close' onClick={ClosedeletePop}> &times;</span>
        </div>
          <div className='yesNoButtons'><button className='cr-nodelete' onClick={ClosedeletePop}>No, Thank You!</button><button className='cr-yesDelete' onClick={handleDelete}>Yes Please</button></div>
        </div>)}
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
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <img className='crMn-carUpdate' src='./images/pen-square-svgrepo-com (1).svg' onClick={() => handleUpdate(user)} />
                    <img className='crMn-carDelete' src='./images/bin-svgrepo-com (1).svg' onClick={() => OpendeletePop(user)} />
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
