import axios from "axios";
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
