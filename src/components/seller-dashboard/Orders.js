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

  console.log(orders);

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
  
  const orderData = [
    {
      label: "Image 1",
      alt: "image1",
      url:
        "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg",
      company:'Mercedes',
      name:'Mercedes A class',
      DOR:'12/1/2022',
      sellingPrice:4000  
    },
    {
      label: "Image 2",
      alt: "image2",
      url:
        "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png",
        company:'Mercedes',
        name:'Mercedes C class',
        DOR:'12/1/2022',
        sellingPrice:4000
    },
    {
      label: "Image 3",
      alt: "image3",
      url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg",
      company:'Audi',
      name:'Audi s6',
      DOR:'12/1/2022',
      sellingPrice:4000
    },
    {
      label: "Image 4",
      alt: "image4",
      url:
        "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY",
      company:'BMW',
      name:'BMW M3',
      DOR:'12/1/2022',
      sellingPrice:4000
    }
  ];
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
            <button
          className="button-arrow2"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">back</span>{" "}
        </button>
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {carsOrder.map((item) => {
          return <CarouselItem item={item}/>;
        })}
      </div>        
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
