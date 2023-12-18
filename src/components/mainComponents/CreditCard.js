import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../styles/creditcard.css";
import { addCard } from "../actions/card";
import { useSelector, useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
function CreditCard(props) {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const {userId} = props;

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
      toast.success("Card credentials added successfully!")
    }
  };
  return (
    <div className="card-container">
      <div className="credit-card">
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
      </div>
    </div>
  );
}

export default CreditCard;
