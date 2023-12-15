import { React, useEffect,useState } from "react";
import "../styles/overview.css";
import "../styles/orders.css";
import { useSelector, useDispatch } from 'react-redux';
import { getAllReviews,deleteReview } from '../actions/review';

function Reviews() {
    const reviews = useSelector((state) => state.reviews);
    const dispatch = useDispatch();
    const [selectedReview, setSelectedReview] = useState(null);
    const [DeleteshowPopup, setDeleteShowPopup] = useState(false);
    const OpendeletePop = (review) => {
        setSelectedReview(review);
        setDeleteShowPopup(true);
      };
      const handleDelete = () => {
        if (selectedReview) {
          dispatch(deleteReview(selectedReview._id));
          setSelectedReview(null);
          setDeleteShowPopup(false);
        }
      };
      const ClosedeletePop = () => {
        setDeleteShowPopup(false);
      };
    useEffect(() => {
        dispatch(getAllReviews());
      }, [dispatch]);
      const Stars = (rating) => {
        const totalStars = 5;
        const coloredStars = rating > 0 ? rating : 0;
    
        const starArray = [];
        for (let i = 0; i < totalStars; i++) {
          const isColored = i < coloredStars;
          starArray.push(
            <span key={i} style={{ color: isColored ? '#C92424' : 'gray', fontSize: '45px' }}>
              &#9733;
            </span>
          );
        }
        return starArray;
      };
    
  return (
    <div className="or-component">
      <div>
        <h1>Reviews</h1>
      </div>
      <div className="or-div-table">
            <table className="or-third-table">
              <thead>
                <tr>
                  <th className="or-third-table-th">Name</th>
                  <th className="or-third-table-th">Rating</th>
                  <th className="or-third-table-th">Comment</th>
                  <th className="or-third-table-th">Delete</th>
                </tr>
              </thead>
              <tbody>
              {reviews.map((review) => (
                  <tr key={review._id}>
                    <td>{review.fullName}</td>
                    <td>{Stars(review.rating)}</td>
                    <td><div>{review.comment}</div></td>
                    <td><img className='crMn-carDelete' src='./images/bin-svgrepo-com (1).svg'onClick={() => OpendeletePop(review)}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {(DeleteshowPopup && <div className='cr-deletepopup'><div className='cr-deletepopup-head'>
          <h2>Are You Sure You want to Delete?</h2>
          <span className='cr-deletepopup-close' onClick={ClosedeletePop}> &times;</span>
        </div>
          <div className='yesNoButtons'><button className='cr-nodelete' onClick={ClosedeletePop}>No, Thank You!</button><button className='cr-yesDelete' onClick={handleDelete}>Yes Please</button></div>
        </div>)}
       </div>
  );
}
export default Reviews;
