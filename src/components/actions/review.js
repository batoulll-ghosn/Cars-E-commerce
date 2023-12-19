import axios from "axios";
export const getAllReviews = () => {
    return (dispatch) => {
      axios
        .get(`http://localhost:5000/reviews/getAll`)
        .then((response) => {
        console.log("action response",response)
          const reviews = response.data.get;
          dispatch({
            type: "getAll",
            payload: reviews,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const deleteReview = (Id) => {
    return (dispatch) => {
      axios
        .delete(`http://localhost:5000/reviews/deleteReviewById/${Id}`)
        .then((response) => {
          dispatch({
            type: "deleteReview",
            payload: Id,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
  };
export const addReview = (
    fullName,comment,rating
) => {
  return (dispatch) => {
    axios
      .post(` http://localhost:5000/reviews/add`, {fullName,comment,rating})
      .then((response) => {
        const result = response.data.result;
        dispatch({
          type: "addReview",
          payload: result,
        });
      })
      .catch((error) => console.log("Failed to add an review :", error));
  };
};
