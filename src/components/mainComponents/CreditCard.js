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
function CreditCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const {userId} = props;
  const {order} = props;
  const [card, setCard]= useState([]);
 
  const closePopup = ()=>{
    window.location.reload();
  }
  useEffect(()=>{
    axios
        .get(`http://localhost:5000/userInfo/getCardInfoByUserId/65775daf4ab849f2d4842b59`)
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
      dispatch(addCard("65775daf4ab849f2d4842b59",name,number,cvc,expiry))
      axios
      .post(` http://localhost:5000/orders/add`, order)
      .then((response) => {
        const order = response.data.order;
        toast.success("Order successfully sent and paid, your order will be delivered asap")
      })
      .catch((error) => {
        console.log("Failed to add an order :", error);
        toast.error("Something went wrong")
      });
    }
  };
  
  const handleAddOrder=()=>{
    axios
      .post(` http://localhost:5000/orders/add`, order)
      .then((response) => {
        
        order.cars.forEach(element => {
          axios.put(` http://localhost:5000/cars/reduceQty/${element}`)
        .then((response) => {
          toast.success("Order successfully sent and paid, your order will be delivered asap")
          navigate('/cars')
        })
        .catch((error) => {
          console.log("Failed to add an order :", error);
          toast.error("Something went wrong");
        });
        });
        
        //navigate('/cars')
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
