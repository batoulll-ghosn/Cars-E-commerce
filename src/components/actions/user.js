import axios from "axios";

export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/getAll`)
      .then((response) => {
        const users = response.data.users;
        dispatch({
          type: "getAllUsers",
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
      .get(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/findOneById/${Id}`)
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
      .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/findByRole`, { role })
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
      .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/login`, { email, password })
      .then((response) => {
        const token = response.data.token;
        const id = response.data.id;
        dispatch({
          type: "login",
          payload: {token,id}
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
        .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/register`, newUser)
        .then((response) => {
          const user = response.data.user;
          const token = response.data.token;
          const id = response.data.id;
          dispatch({
            type: "register",
            payload: {user,token, id}
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
   
   export const register2 = (fullName,email, password,phoneNumber, role) => {
    const newUser = {
      fullName,
      email,
      password,
      phoneNumber,
      role,
    };
    return (dispatch) => {
      axios
        .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/register`, newUser)
        .then((response) => {
          const token = response.data.token;
          const id = response.data.id;
          dispatch({
            type: "register2",
            payload: {token, id}
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
      .delete(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/deleteById/${Id}`)
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
      .put(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/updateUser/${Id}`, newUser)
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
      .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/updateEmailAndPass/${Id}`, {email,password})
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
      .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/updatePassword/${Id}`, {password})
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