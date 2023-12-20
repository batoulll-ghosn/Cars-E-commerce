import React, { useState } from "react";
import "../styles/review.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addReview} from '../actions/review';
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Review = () => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const [name, setName]= useState("");
  const [comment, setComment]= useState("");
  const [stars, setStars]= useState(0);
  const numbers=[1,2,3,4,5];
  const navigate = useNavigate();
  const handleClickStars= (n)=> {
    setStars(n);
  }
  const handleReview = (e) =>{
    e.preventDefault();
    dispatch(addReview(name,comment,stars));
    toast.success('Thank you for your review!')
    setTimeout(() => {
      navigate('/')
    }, 3000);
  }

  return (
    <div className="review-body">
      <div className="review-card">
        <form className="review-form" onSubmit={handleReview}>
          <h1>Leave a review</h1>
          <div className="hr"></div>
          <div className="two-in-onee">
          <h2>
            How is your car?
          </h2>
          <p>Give us your rating and also your feedback</p>
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
