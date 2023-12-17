import React, { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import { getUserById, updateProfile, updatePassword } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import "../styles/profile.css";

function Profile(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [modal, setmodal] = useState(true);
  const [isEditable, setIsEditable] = useState(false);
  const { userId } = props;
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch]);
  console.log(user);

  const toogleModal = () => {
    setmodal(false);
  };
  
  const handleEditing = async ()=>{
    const match = await bcrypt.compare(password, user.password)
    if (match) {
      setIsEditable(true);
    }
  }

 

  const updateProfilee = (e) => {
    e.preventDefault();
    if (newpassword.trim() === Cpassword.trim()) {
      
      var newMail= user.email;
      if(email.trim()!== ""){
        newMail=email;
      }
      var newPass =user.password;
      if(password.trim()!== ""){
        newPass=password;
      }
      if(newMail !== user.email){
      dispatch(updateProfile(userId, newMail, newPass));
      }
      else{
      dispatch(updatePassword(userId, newPass))
      }
      
    } else {
      alert("New password and confirm password do not match.");
    }
  };

  return (
    <div className="profile">
      <p>YOUR PROFILE</p>
      { isEditable &&
      <p>Edit the field(s) of your choice</p>
      }
      {!isEditable &&
      <div className="profile-container">
        <label>Fullname</label>
        <input type="text" placeholder={user.fullName} readOnly />
      </div>
      }
      {isEditable &&
      <div className="profile-container">
        <label>Email</label>
        <input
          type="email"
          placeholder={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      }
       {!isEditable &&
      <div className="profile-container">
        <label>Email</label>
        <input
          type="email"
          placeholder={user.email}
          readOnly
        />
      </div>
      }
      {isEditable &&
      <div className="profile-container">
        <label>New password</label>
        <input
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
}
{isEditable &&
      <div className="profile-container">
        <label>Confirm password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => setCPassword(e.target.value)}
        />
      </div>
}
{!isEditable &&
   <div className="profile-container">
   <label>Password</label>
   <input
     type="password"
     placeholder="Enter your old pass to edit"
     onChange={(e)=>setPassword(e.target.value)}
     required
   />
 </div>
}

      <div className="profile-buttons">
        {!isEditable ?
        <button onClick={handleEditing}>EDIT</button>
        :
        <button onClick={updateProfilee}>SAVE</button>
}
      </div>
      
    </div>
  );
}
export default Profile;
