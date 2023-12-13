import axios from "axios";
export const addOrder = (
    userId, cars, shipmentId, status
) => {
  const newOrder = {
    userId, cars, shipmentId, status
  };
  return (dispatch) => {
    axios
      .post(` http://localhost:5000/orders/add`, newOrder)
      .then((response) => {
        const order = response.data.order;
        dispatch({
          type: "addOrder",
          payload: order,
        });
      })
      .catch((error) => console.log("Failed to add an order :", error));
  };
};
export const getAllOrders = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/orders/getOrders")
      .then((response) => {
        const orders = response.data.orders;
        dispatch({
          type: "getAll",
          payload: orders,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};
export const deleteOrder = (Id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:5000/orders/deleteOrder/${Id}`)
      .then((response) => {
        dispatch({
          type: "deleteOrder",
          payload: Id,
        });
      })
      .catch((error) => console.log("Failed to delete the order :", error));
  };
};
export const updateOrder = (
   Id, userId, cars, shipmentId, status
) => {
  const updatedOrder = {
    userId, cars, shipmentId, status
  };
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/orders/updateOrder/${Id}`, updatedOrder)
      .then((response) => {
        const order = response.data.order;
        dispatch({
          type: "updateOrder",
          payload: { Id, order },
        });
      })
      .catch((error) => console.log("Failed to update the order :", error));
  };
};
export const updateStatus = (Id)=>{
  return (dispatch) => {
    axios
      .put(`http://localhost:5000/orders/updateStatus/${Id}`)
      .then((response) => {
        const order = response.data.order;
        dispatch({
          type: "updateOrder",
          payload: { Id, order },
        });
      })
      .catch((error) => console.log("Failed to update the order's status :", error));
  };
};
