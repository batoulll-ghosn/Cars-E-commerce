import React, { useState } from 'react';
import '../styles/orders-seller.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllOrders } from '../actions/order';
import { useEffect } from 'react';
import { CarouselItem } from "./CarouselItem";

export default function Orders() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [isVisible, setPopupVisibility] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [carsOrder, setCarsOrder] = useState([]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
   console.log(orders)
  function readableDate(d) {
    const v = new Date(d).toLocaleDateString('en-GB');
    return v;
  }
  const sum = (tab) => {
    let s = 0;
    tab.forEach((element) => {
      s += element.sellingPrice;
    });
    return s;
  };
  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setCarsOrder(order.cars)
    setPopupVisibility(true);
  };
  const closePopup = () => {
    setPopupVisibility(false);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= carsOrder.length) {
      newIndex = carsOrder.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="or-component">
      <div>
        <h1>Orders</h1>
      </div>
      <div className="or-div-table">
        <table className="or-third-table">
          <thead>
            <tr>
              <th className="or-third-table-th">Order</th>
              <th className="or-third-table-th">Date</th>
              <th className="or-third-table-th">Qty</th>
              <th className="or-third-table-th">Status</th>
              <th className="or-third-table-th">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                className="seller-tr"
                key={order._id}
                onClick={() => handleRowClick(order)}
              >
                <td>{index + 1}</td>
                <td>{readableDate(order.createdAt)}</td>
                <td>{order.cars.length}</td>
                <td>{order.status === false ? 'pending' : 'completed'}</td>
                <td>{sum(order.cars)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isVisible && (
        <div className="Hadi-popup" onClick={closePopup}  >
          <div className="Hadi-popup-order" onClick={(e) => e.stopPropagation()}>
            <div className='Hadi-popup-order-close'> <span className="Hadi-popup-order-span" onClick={closePopup}>
              &times;
            </span>
            </div>
            <div className='Hadi-popup-order-g'>
              <h2>Order Details</h2>
            </div>
            <div className='Hadi-popup-order-u'>
              Ordered by:<br />
              {selectedOrder.userId.email}<br />
              Phone Number:{selectedOrder.userId.phoneNumber}
            </div>
            <div className="carousel">
              <div
                className="inner"
                style={{
                  transform: `translate(-${activeIndex * 100}%)`
                }}
              >
                {carsOrder.map((item) => {
                  return <CarouselItem item={item} />;
                })}
              </div>
                  <button
                    className="button-arrow2"
                    onClick={() => {
                      updateIndex(activeIndex - 1);
                    }}
                  >
                    <span class="material-symbols-outlined">back</span>{" "}
                  </button>
              <button
                className="button-arrow1"
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
              >
                <span class="material-symbols-outlined">next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
