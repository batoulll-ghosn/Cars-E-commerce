import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../styles/creditcard.css";
import { addCard } from "../actions/card";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../actions/order";
import { useSelector, useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import axios from "axios";
import { getUserID } from "./GetData";
function CreditCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const {order} = props;
  const [card, setCard]= useState([]);
  const {carId} = props;
  const userId = getUserID();
  
 console.log(order);
  const closePopup = ()=>{
    window.location.reload();
  }
  useEffect(()=>{
    axios
        .get(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/userInfo/getCardInfoByUserId/${userId}`)
        .then((response) => {
          const card = response.data.card;
          setCard(card)
        })
        .catch((error) => {
          console.error("Error adding card:", error);
        });
  },[])
  console.log(card)

  const handleAddCard = (e) => {
    e.preventDefault();
    const numberTest = /^\d{16}$/;
    const nameTest = /^[A-Za-z\s]+$/;
    const expiryTest = /^\d{2}\/\d{2}$/;
    const cvcTest = /^\d{3,4}$/;
    if (
      !numberTest.test(number) ||
      !nameTest.test(name) ||
      !expiryTest.test(expiry) ||
      !cvcTest.test(cvc)
    ) {
      toast.error("Counldn't add card credentials")
    }
    else{
      dispatch(addCard(userId,name,number,cvc,expiry))
      axios
      .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/orders/add`, order)
      .then((response) => {
        console.log(response.data)
        const order = response.data.order;
       response.data.resultat.cars.forEach(async(element) => {
          console.log(element);
          await axios.put(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/cars/reduceQty/${element}`)
        .then((response) => {
          
          
        })
        .catch((error) => {
          console.log("Failed to add an order :", error);
          toast.error("Something went wrong");
        });
        const data = {
          email:'hadimortada1245@gmail.com', name:"name",shipmentId:'65819b34ac9b702633fc44c5'
        }
        console.log(order)
        axios.post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/users/send`, data)
        .then ((response) => {
          toast.success("Order successfully sent and paid, your order will be delivered asap")
        })
      })
    localStorage.removeItem('ids');
     navigate('/')})

      .catch((error) => {
        console.log("Failed to add an order :", error);
        toast.error("Something went wrong")
      });
    }
  };
  
  const handleAddOrder= async()=>{
     await axios
      .post(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/orders/add`, order)
      .then((response) => {
        console.log(response.data)
        response.data.resultat.cars.forEach(async(element) => {
          console.log(element);
          await axios.put(`${process.env.REACT_APP_HOSTING_BACKEND_LINK}/cars/reduceQty/${element}`)
        .then((response) => {
          toast.success("Order successfully sent and paid, your order will be delivered asap")
          
        })
        .catch((error) => {
          console.log("Failed to add an order :", error);
          toast.error("Something went wrong");
        });
        });
        localStorage.removeItem('ids')
          navigate('/cars')
      })
      .catch((error) => {
        console.log("Failed to add an order :", error);
        toast.error("Something went wrong");
      });
  }
  
  return (
    <div className="card-container">
   
      <div className="credit-card">
       { card.length === 0 ?
        <>
        <span className="close-span" onClick={closePopup}>
              &times;
            </span>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form className="credit-card-from" onSubmit={handleAddCard}>
          <input
            className="credit-card-input"
            type="tel"
            name="number"
            placeholder="Card Number(16 digits)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            required
            minLength="16"
            maxLength="16"
          />
          <input
            className="credit-card-input"
            type="text"
            name="name"
            placeholder="Name(only letters)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            required
          />
          <div className="two-in-one">
            <input
              className="credit-card-input"
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <input
              className="credit-card-input"
              type="tel"
              name="cvc"
              placeholder="CVC(3/4 digits)"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        </>
        :
        <>
         <span className="close-span" onClick={closePopup}>
              &times;
            </span>
        <h2 style={{textAlign:"center"}}>Choose old card to pay</h2>
        {
          card.map((item)=>(
            <div className="mmm" onClick={handleAddOrder}>
            <Cards
            number={item.cardNumber.substring(0,6)}
            name={item.nameOnCard}
            expiry={item.expDate}
            cvc=""
            focused={focus}
          />
          </div>
          ))
       
        }
        <button style={{marginLeft:"15.5%"}} onClick={()=>setCard([])}>Add new card to pay</button>
        </>
}
      </div>

    </div>
  );
}

export default CreditCard;
