import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import { getUserById, updateProfile } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import "../styles/profile.css";

function Profile(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [modal, setmodal] = useState(true);
  const { userId } = props;
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById("6576cc55a83f9a4c5b14d3d7"));
  }, [dispatch]);
 console.log(user)

  const toogleModal = () => {
    setmodal(false);
  };

  const [isEditable, setIsEditable] = useState(true);
  const handleEditing = () => {
    var x = prompt("Enter your old password");
    const match = bcrypt.compare(x, user[0].password);
    if (match) {
      setIsEditable(true);
    }
  };

  const updateProfilee = () => {
    if (newpassword.trim() === Cpassword.trim()) {
      const updates = {
        email: email.trim() || user.email,
        password: newpassword.trim() || user.password,
      };
    dispatch(updateProfile("6576cc55a83f9a4c5b14d3d7",email,newpassword));
    } else {
      alert("New password and confirm password do not match.");
    }
  };

  return (
  (
      <div className="popup d-flex flex-column">
        <p className="text-center">YOUR PROFILE</p>
       
          <p className="text-center">Edit the field(s) of your choice</p>
      

        <div className="d-flex justify-content-end align-items-end">
          <label>Email</label>
    
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
     
        </div>
          <div className="d-flex justify-content-end align-items-end">
            <label>New password</label>
            <input
              type="password"
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end align-items-end">
            <label>Confirm password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
    

        <div className="popup-buttons d-flex justify-content-center">
            <button onClick={handleEditing}>EDIT</button>

            <button onClick={updateProfilee}>SAVE</button>

        </div>
      </div>
    )
  );
}
export default Profile;
