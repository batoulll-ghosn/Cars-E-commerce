import {React,useEffect, useState} from 'react';
import '../styles/overview.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllOrders } from '../actions/order';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getAllUsers} from '../actions/user';
import { getAllShipments } from '../actions/shipment.';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, 
  Title,
  Tooltip,
  Legend
);
function OverView() {
    const orders = useSelector((state) => state.orders);
    const users = useSelector((state) => state.users);
    const shipments = useSelector((state) => state.shipments);

    const [revenue,setRevenue] = useState([]);
 const dispatch=useDispatch()
 useEffect(() => {
 dispatch(getAllOrders());
 dispatch(getAllUsers());
 dispatch(getAllShipments())
 },[])

 useEffect(() =>{
  const revenues = orders.filter((order) => {
    
   if (order.status === true)
    //  console.log(order.cars)}
    return order.cars
  })
  setRevenue(revenues);
  // let s = 0
  // revenues.map((revenue)=>{
  //     s += revenue[0].sellingPrice
  // })
  // console.log(s)
 },[orders])
console.log(revenue)

 function readableDate(d) {
  const v = new Date(d).toLocaleDateString('en-GB');
  return v;
}


 const dataValues = [1552, 1019, 213, 600,1552, 1019, 213, 600,1552, 1019, 213, 600];
  const total = dataValues.reduce((a, b) => a + b, 0);
  const dataPercentages = dataValues.map(value => (value / total) * 100);
  const data = { 
    labels: ["Jan", "Feb", "March", "April","May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"], 
    datasets: [ 
      { 
        label: "Revnue", 
        data: dataPercentages, 
        backgroundColor: ["red", "red", "red", "red"], 
        borderColor: ["red", "red", "red", "red"], 
        borderWidth: 0.5, 
      }, 
    ], 
  };
  const options = {
    maintainAspectRatio: false, 
    scales: { 
      yAxes: [ 
        { 
          ticks: { 
            beginAtZero: true,
            callback: function(value) {
              return value + "%"; 
            },
          }, 
        }, 
      ], 
    }, 
    legend: { 
      labels: { 
        fontSize: 15, 
      }, 
    }, 
  };
  return (
    <div className='ov-component'>
            <div>
            <p className='ov-component-p'>Let’s check the stats today!</p>
            </div>
             <div className='ov-second'>
                <div className='ov-second-customers'>
                    <div className='ov-second-img'><img src='./images/revenue.svg'/></div>
                    <div className='ov-second-textContent'><p className='ov-second-textContent-p'>{users.length}</p><p className='ov-second-textContent-pp'>CUSTOMERS</p></div>
                </div>
                <div className='ov-second-revenue'>
                    <div className='ov-second-img'><img src='./images/people.svg'/></div>
                    <div className='ov-second-textContent'><p className='ov-second-textContent-p'>20K</p><p className='ov-second-textContent-pp'>REVENUE</p></div>
                </div>
                <div className='ov-second-shipping'>
                    <div className='ov-second-img'><img src='./images/shipping.svg'/></div>
                    <div className='ov-second-textContent'><p className='ov-second-textContent-p'>{shipments.length}</p><p className='ov-second-textContent-pp'>LOCATIONS</p></div>
                </div>
                </div>
             <div className='ov-third'>
             <p className='ov-component-p'>Recent orders</p>
             <div className='ov-third-main'><div className='ov-third-div-table'>
             <table className='ov-third-table'>
      <thead>
        <tr>
          <th className='ov-third-table-th'>Order</th>
          <th className='ov-third-table-th'>Date</th>
          <th className='ov-third-table-th'>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.slice(0, 4).map((order,index) => (
          <tr key={order._id}>
            <td>{index + 1}</td>
            <td>{readableDate(order.createdAt)}</td>
            <td>{order.status === false ? 'pending' : 'completed'}</td>
            
           
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className='ov-third-graph'>
        <Bar data={data} options={options} height={200} /> 
        </div></div>
             </div>
   </div>
  );
}
export default OverView;