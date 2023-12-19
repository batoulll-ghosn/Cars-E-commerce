import axios from "axios";

export const addCard = ( userId,nameOnCard, cardNumber, cvc, expDate) => {
    const newCard = {
        userId,nameOnCard, cardNumber, cvc, expDate
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
    return (dispatch) => {
      axios
        .get(`http://localhost:5000/getCardInfoByUserId/${UserId}`)
        .then((response) => {
          const card = response.data.card;
          dispatch({ type: "getCardByUserId", payload: card });
        })
        .catch((error) => {
          console.error("Error adding card:", error);
        });
    };
  
  };


  
  