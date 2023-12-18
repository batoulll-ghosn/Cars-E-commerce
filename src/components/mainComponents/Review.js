import React, { useState } from "react";
import "../styles/review.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addReview} from '../actions/review';

const Review = () => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const [name, setName]= useState("");
  const [comment, setComment]= useState("");
  const [stars, setStars]= useState(0);
  const numbers=[1,2,3,4,5];
  const handleClickStars= (n)=> {
    setStars(n);
  }
  const handleReview = (e) =>{
    e.preventDefault();
    dispatch(addReview(name,comment,stars));
  }

  return (
    <div className="review-body">
      <div className="review-card">
        <form className="review-form" onSubmit={handleReview}>
          <h1>Leave a review</h1>
          <div className="hr"></div>
          <div className="two-in-one">
          <h2>
            How is your car?
          </h2>
          <p>give us your rating and also your feedback</p>
          </div>
          <div>
            {numbers.map((i) => (
              <span
                key={i}
                className={`span1 ${i<=stars ?'span2':''}`}
                onClick={() => handleClickStars(i)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <input type="text" placeholder="Enter your fullname" onChange={(e)=>setName(e.target.value)} required/>
          <textarea onChange={(e)=>setComment(e.target.value)} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Review;
