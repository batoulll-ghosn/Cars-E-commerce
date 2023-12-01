const cardReducer = (state = [], action) => {
    switch (action.type) {
      case "addCard":
        return [...state, action.payload];
      case "getcardByUserId":
          return state.find((card) => {
           card.UserId === action.payload;
        });
      default:
        return state;
    }
  };
  export default cardReducer;
  