import {React,useEffect} from 'react';
import '../styles/overview.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getAllCars} from '../actions/car';
import userEvent from '@testing-library/user-event';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getAllUsers} from '../actions/user';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement, 
  Title,
  Tooltip,
  Legend
);
function OverView() {
    const cars = useSelector((state) => state.cars);
    const users = useSelector((state) => state.users)
 const dispatch=useDispatch()
 useEffect(() => {
 dispatch(getAllCars());
 dispatch(getAllUsers());
 },[])
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
                    <div className='ov-second-textContent'><p className='ov-second-textContent-p'>70</p><p className='ov-second-textContent-pp'>SHIPPED</p></div>
                </div>
                </div>
             <div className='ov-third'>
             <p className='ov-component-p'>Recent orders</p>
             <div className='ov-third-main'><div className='ov-third-div-table'>
             <table className='ov-third-table'>
      <thead>
        <tr>
          <th className='ov-third-table-th'>Title</th>
          <th className='ov-third-table-th'>Qty</th>
          <th className='ov-third-table-th'>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.slice(0, 4).map((car) => (
          <tr key={car._id}>
            <td>{car.carName}</td>
            <td>{car.quantity}</td>
            <td>{car.initialPrice}</td>
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
