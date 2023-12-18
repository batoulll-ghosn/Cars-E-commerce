import axios from "axios";

export const getAllShipments = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/shipments/getAll`)
      .then((response) => {
        const shipments = response.data.resultat;
        dispatch({
          type: "getAll",
          payload: shipments,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const getShipmentById = (Id) => {
  return { type: "getShipmentById", payload: Id };
};

export const addShipment = (location, duration) => {
  const newShipment = {
    location,
    duration,
  };
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/shipments/add`, newShipment)
      .then((response) => {
        const shipment = response.data.resultat;
        dispatch({
          type: "addShipment",
          payload: shipment,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const deleteShipment = (Id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/shipments/deleteOne/${Id}`)
      .then((response) => {
        dispatch({
          type: "deleteShipment",
          payload: Id,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};

export const updateShipment = (
  Id,
  location, duration
) => {
  const newShipment = {
    location, duration
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/shipments/updateOne/${Id}`, newShipment)
      .then((response) => {
        const updatedShipment = response.data.updatedShipment;
        dispatch({
          type: "updateShipment",
          payload: { updatedShipment, Id },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
};
