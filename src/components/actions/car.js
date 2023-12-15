import axios from "axios";
export const addCar = (
  carName,
  company,
  type,
  description,
  initialPrice,
  sellingPrice,
  TVA,
  discount,
  quantity,
  files,
  DOR,
  color
) => {
  const newCar = {
    carName,
    company,
    type,
    description,
    initialPrice,
    sellingPrice,
    TVA,
    discount,
    quantity,
    files,
    DOR,
    color,
  };
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/cars/addCar`, newCar)
      .then((response) => {
        const car = response.data.car;
        dispatch({
          type: "addCar",
          payload: car,
        });
      })
      .catch((error) => console.log("Failed to add car :", error.response.data));
  };
};
export const getAllCars = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/cars/getAll")
      .then((response) => {
        const cars = response.data.cars;
        dispatch({
          type: "getAll",
          payload: cars,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};
export const removeCar = (Id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/cars/deleteCar/${Id}`)
      .then((response) => {
        dispatch({
          type: "deleteCar",
          payload: Id,
        });
      })
      .catch((error) => console.log("Failed to delete the car :", error));
  };
};
export const getCarByName = (carName) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/cars/getAll")
      .then((response) => {
        let cars = response.data.cars;
        dispatch({
          type: "getCarByName",
          payload: {carName,cars}
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};
export const getCarsByCompany = (company) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/cars/getAll")
      .then((response) => {
        let cars = response.data.cars;
        dispatch({
          type: "getCarsByCompany",
          payload: {company,cars},
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
   
  };
};
export const GetCarsByColor = (color) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/cars/getAll")
      .then((response) => {
        let cars = response.data.cars;
        dispatch({
          type: "GetCarsByColor",
          payload: {color,cars},
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
};
export const getCarsByType = (type) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/cars/getAll")
      .then((response) => {
        let cars = response.data.cars;
        dispatch({
          type: "getCarsByType",
          payload: {type,cars},
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));

  };
};
export const getAllCarsBySelector = (selector) => {
  return (dispatch) => {
    dispatch({
      type: "getAllCarsBySelector",
      payload: selector,
    });
  };
};
export const updateCar = (
  Id,
  carName,
  company,
  type,
  description,
  initialPrice,
  sellingPrice,
  TVA,
  discount,
  quantity,
  image,
  DOR,
  color
) => {
  const updatedCar = {
    carName,
    company,
    type,
    description,
    initialPrice,
    sellingPrice,
    TVA,
    discount,
    quantity,
    image,
    DOR,
    color,
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/cars/updateCar/${Id}`, updatedCar)
      .then((response) => {
        const car = response.data.car;
        dispatch({
          type: "updateCar",
          payload: { Id, car },
        });
      })
      .catch((error) => console.log("Failed to update the car :", error));
  };
};

