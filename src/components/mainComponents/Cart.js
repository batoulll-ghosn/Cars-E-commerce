import '../styles/cart.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import {getAllShipments} from '../actions/shipment';
import {getAllCars} from '../actions/car';
import trash from '../styles/bin-svgrepo-com (1).svg';
import CreditCard from './CreditCard';
const Cart = () => {
    const [location,setLocation]=useState(null);
    // const [subTotal,setSubTotal]=useState(0);
    // const [total,setTotal]=useState(0);
    // const [discounts,setDiscounts]=useState('');
    const [cartCars,setCartCars]=useState([]);

    const cars=useSelector((state)=>state.cars);
    const shipments=useSelector((state)=>state.shipments);
      const dispatch = useDispatch();
    const [showCard, setShowCard]= useState(false);
    const [ids, setIds]= useState([]);
    useEffect(() => {
        dispatch(getAllCars());
        setIds(localStorage.getItem('id').split(','));
        dispatch(getAllShipments());
      }, []);
      const handleSelectLocation=(e)=>{
        console.log(e.target.value);
      }
     const handleCreditCard= ()=>{
        setShowCard(!showCard);
     } 
    const handleRemoveItem=(id)=>{
        setIds(ids.filter((Id)=>Id!==id));  
    }
     setTimeout(() => {
        localStorage.setItem('id',ids);
    }, 5000);
//    const solver=(sellingPrice,discount)=>{
//     setSubTotal(prev=>prev+sellingPrice);
//     setDiscounts(prev=>prev+discount+'%');
//     setTotal(prev=>prev+(sellingPrice-sellingPrice*(discount/100)));
//    }
//    console.log(subTotal,total,discounts);
//    ids&&ids.map(id=>{
//     setCartCars(prev=>[...prev,cars.filter((car)=>car._id===id)])
//    })
   console.log(ids);
    return (
        <div className='cart-b-div'>
        
            <div className='cart-head'>
                <div className='cart-head-title'><h2>DriveEpic</h2></div>
                <div className='cart-head-button'><button >Continue shopping</button></div>
            </div>
            <div className='my-cart-div'>
                <h1>MY CART</h1>
            </div>
            <div className="cart-product">
                <table>
                    <tr>
                        <td className='white-tr-td'>Product</td>
                        <td className='white-tr-td'>Details</td>
                        <td className='white-tr-td'> Price</td>
                        <td className='white-tr-td'> Action</td>
                    </tr>
                    {ids && ids.map((id)=>{
                       const item= cars.filter((car)=>car._id===id);
                        setCartCars(prev=>[...prev,item[0]]);
                        return(item[0]&&<tr key={id}>
                            <td className='cart-details-order'><img src={item[0].files[0]} alt='produc' /></td>
                            <td className='cart-details-order'>
                                <span className='cart-carName'>{item[0].carName}</span><br />
                                <span className='cart-car-details'>{item[0].color}// {item[0].DOR} // {item[0].company}</span>
                            </td>
    
                            <td className='cart-details-order'>
                                <span className='cart-car-details'>{item[0].sellingPrice}$</span>
                            </td>
                            <td className='cart-details-order'><span className='cart-car-details'><img src={trash} onClick={()=>handleRemoveItem(item[0]._id)}/></span></td>
                        </tr>)
                    })
                    
}
                </table>
            </div>
            {
            showCard && <CreditCard userId="657f6130bddb5fab30a01537"/>
        }
            <div className='footer-cart-container'>
                <div className='footer-cart-container-white'>
                    <div className='white-part1'>
                        <span>Choose Pick Up Location</span>
                        <select className='location-list' onChange={handleSelectLocation}>{
                            shipments.map((shipment)=><option value={shipment.location}>{shipment.location}</option>)
                        }
                        </select>
                    </div>
                    <div className='white-part2'>

                        <table>
                            <tr>
                                <td className='td-white'>SubTotal</td>
                                <td className='td-n'>45 500 $</td>
                            </tr>
                            <tr>
                                <td className='td-white'>discount</td>
                                <td className='td-n'>30%-15%</td>
                            </tr>
                            <tr>
                                <td className='part2-shipping'>Shipping</td>
                                <td className='part2-free'>Free</td>
                            </tr>
                            <tr>
                                <td className='td-white'>TOTAL</td>
                                <td className='td-n'>42 000 $</td>
                            </tr>
                        </table>
                        <div className='checkout-cart'><button onClick={handleCreditCard}>Checkout 42 000 $</button></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Cart;