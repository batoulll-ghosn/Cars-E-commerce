import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOrdersByUserId } from "../actions/order";
import person from "../styles/user-alt-1-svgrepo-com (1).svg";
import Profile from "../mainComponents/Profile";

const CustomerDash = () => {
  const [clicked, setclicked] = useState(false);
  const [profile, setProfile] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };
  const handleProfile = () => {
    setProfile(!profile);
  };
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersByUserId("6576cc55a83f9a4c5b14d3d7"));
  }, [dispatch]);
  console.log(orders);
  const navigate = useNavigate()
  const handleSignOut = () => {
    localStorage.clear()
    navigate('/');
  }
  return (
    <div>
      <nav className="Navbar">
        <Link className="N-logo" to="/">
          DriveEpic
        </Link>
        <div>
          <ul id="N-menu" className={clicked ? "#N-menu active" : "#N-menu"}>
            <li className="N-menu-items">
              <h1 className="Mn-admin">Hello customer</h1>
            </li>
            <li className="N-menu-button">
              <button className="N-register"
              onClick={handleSignOut}>Sign Out</button>
            </li>
            <li className="N-menu-items">
              <img
                src={person}
                onClick={handleProfile}
              />
            </li>
          </ul>
        </div>

        <div id="N-mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
      {
        profile &&
        <Profile userId="657f6130bddb5fab30a01537"/>
      }
      <div className="cr-third-main">
        <div className="cr-third-div-table">
          <table className="cr-third-table">
            <thead>
              <tr>
                <th className="cr-third-table-th">Cars</th>
                <th className="cr-third-table-th">Status</th>
                <th className="cr-third-table-th">Shipment Location</th>
                <th className="cr-third-table-th">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.cars.map((car) => car.carName + " ")}</td>
                  <td>{order.status === false ? "Ordered" : "Bought"}</td>
                  <td>{order.shipmentId.location}</td>
                  <td>
                    {/* {order.createdAt.substring(0, 10).split("-")[2] +
                      "/" +
                      order.createdAt.substring(0, 10).split("-")[1] +
                      "/" +
                      order.createdAt.substring(0, 10).split("-")[0]} */}
                    {order.status === false
                      ? order.createdAt
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")
                      : order.updatedAt
                          .substring(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDash;
