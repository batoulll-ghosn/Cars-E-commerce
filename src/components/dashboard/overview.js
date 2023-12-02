import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/overview.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getAllCars} from './car';
import userEvent from '@testing-library/user-event';
function OverView() {
    const cars = useSelector((state) => state.cars);
 const dispatch=useDispatch()
 useEffect(() => {
 dispatch(getAllCars())
 },[])
  return (
    <div className='ov-component'>
            <div>
            <p>Let’s check the stats today!</p>
            </div>
             <div className='ov-second'>
                <div className='ov-second-customers'>
                    <div className='ov-second-img'><img src='./images/revenue.svg'/></div>
                    <div className='ov-second-textContent'><p className='ov-second-textContent-p'>57</p><p className='ov-second-textContent-pp'>CUSTOMERS</p></div>
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
             <p>Recent orders</p>
             <div className='ov-third-main'><div className='ov-third-table'></div><div className='ov-third-graph'></div></div>
             </div>
   </div>
  );
}
export default OverView;
