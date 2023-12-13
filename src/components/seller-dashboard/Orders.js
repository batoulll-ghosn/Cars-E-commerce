import '../styles/orders-seller.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../actions/order";
import { useEffect } from 'react';
export default function Orders(){
    const orders = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllOrders());
    }, []);
    console.log(orders);
    function readableDate(d){
      const v=new Date(d).toLocaleDateString('en-GB');
      return v;
    }
    const  sum=(tab)=>{
      let s=0;
      tab.forEach(element => {
        s+=element.sellingPrice;
      });
      return s;
    }
    return(
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
                  {orders.map((order ,index) => (
                    <tr className="seller-tr" key={order._id}>
                      <td>{index+1}</td>
                      <td>{readableDate(order.createdAt)}</td>
                      <td>{order.cars.length}</td>
                      <td>{order.status===false?'pending':'completed'}</td>
                      <td>{sum(order.cars)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
         </div>
    )
}