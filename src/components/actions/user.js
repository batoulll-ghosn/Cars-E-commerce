import axios from "axios";

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/getAll`)
      .then((response) => {
        const users = response.data.users;
        dispatch({
          type: "getAll",
          payload: users,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const getUserById = (Id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/users/findOneById/${Id}`)
      .then((response) => {
        const user = response.data.user;
        dispatch({
          type: "getUserById",
          payload: user,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const getUsersByRole = (role) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users/findByRole`, { role })
      .then((response) => {
        const users = response.data.users;
        dispatch({
          type: "getUsersByRole",
          payload: users
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:5000/users/login`, { email, password })
      .then((response) => {
        const token = response.data.token;
        dispatch({
          type: "login",
          payload: token
        });
        return token;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  };
};


  export const register = (fullName,email, password,phoneNumber, role) => {
    const newUser = {
      fullName,
      email,
      password,
      phoneNumber,
      role,
    };
    return (dispatch) => {
      axios
        .post(`http://localhost:5000/users/register`, newUser)
        .then((response) => {
          const user = response.data.user;
          dispatch({
            type: "register",
            payload: user
          });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    };
   };
   

export const deleteUser = (Id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/users/deleteById/${Id}`)
      .then((response) => {
        dispatch({
          type: "deleteUser",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const updateUser = (
  Id,
  fullName,
  email,
  password,
  phoneNumber,
  role
) => {
  const newUser = {
    fullName,
    email,
    password,
    phoneNumber,
    role,
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/users/updateUser/${Id}`, newUser)
      .then((response) => {
        const user = response.data.user;
        dispatch({
          type: "updateUser",
          payload: { user, Id },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const updateProfile= (Id,email,password)=>{
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users/updateEmailAndPass/${Id}`, {email,password})
      .then((response) => {
        const user = response.data.user;
        dispatch({
          type: "updateProfile",
          payload: { user, Id },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
}

export const updatePassword= (Id,password)=>{
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/users/updatePassword/${Id}`, {password})
      .then((response) => {
        const user = response.data.user;
        dispatch({
          type: "updatePassword",
          payload: { user, Id },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
}