const reviewsReducer = (state = [], action) => {
    switch (action.type) {
      case "getAll":
        return action.payload;
        case "deleteReview":
          return state.filter((review) => review._id !== action.payload);
          case 'addReview':
            return [...state,action.payload];
      default:
        return state;
    }
  };
  
export default reviewsReducer;