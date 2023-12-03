import axios from "axios";

export const addCard = ( userId,nameOnCard, cardNumber, cvv, expDate) => {
    const newCard = {
        userId,nameOnCard, cardNumber, cvv, expDate
    };
    return (dispatch) => {
      axios
        .post(`http://localhost:5000/userInfo/add`, newCard)
        .then((response) => {
          const card = response.data.card;
          dispatch({
            type: "addCard",
            payload: card,
          });
        })
        .catch((error) => {
          console.error("Error adding card:", error);
        });
    };
  };

  export const getCardByUserId = (UserId) => {
    return { type: "getCardByUserId", payload: UserId };
  };


  
  