import { React, useEffect } from "react";
import "../styles/overview.css";
import "../styles/orders.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllCars } from "../actions/car";

function Orders() {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <div className="or-component">
      <div>
        <h1>Orders</h1>
      </div>
      <div className="or-div-table">
            <table className="or-third-table">
              <thead>
                <tr>
                  <th className="or-third-table-th">Title</th>
                  <th className="or-third-table-th">Qty</th>
                  <th className="or-third-table-th">Order</th>
                  <th className="or-third-table-th">Price</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car) => (
                  <tr key={car._id}>
                    <td>{car.carName}</td>
                    <td>{car.quantity}</td>
                    <td>{car.quantity}</td>
                    <td>{car.initialPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
  );
}
export default Orders;
