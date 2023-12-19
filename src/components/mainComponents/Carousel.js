import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReviews } from '../actions/review';
import '../styles/reviews.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Testimonial() {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

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
    <div className='mn-tahet'>
      <h1 className='faq-header'>Testimonial</h1>
      <div className='carousel-in-dashboard'>
        <Carousel className='testimonial-carousel'>
          {reviews.map((review) => (
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '800px',
                marginLeft: '360px',
                fontSize: '24px',
                padding: '10px',
                height: '240px',
                
              }}
              className='testimonial-carousel-div'
              key={review._id}
            >
              <p style={{
                fontSize: '34px',
              }}>{review.fullName}</p>
              <hr className='testimonial-hr-line'></hr>
              <p>{Stars(review.rating)}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='carousel-in-ipad'   style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '680px',
                marginLeft: '60px',
                fontSize: '26px',
                padding: '10px',
                height: '240px',
              }}>
        <Carousel className='testimonial-carousel'>
          {reviews.map((review) => (
            <div className='testimonial-carousel-div' key={review._id}>
              <p style={{
                fontSize: '34px',
              }}>{review.fullName}</p>
              <hr className='testimonial-hr-line'></hr>
              <p>{Stars(review.rating)}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='carousel-in-phone' >
        <Carousel className='testimonial-carousel'>
          {reviews.map((review) => (
            <div className='testimonial-carousel-div'style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: '40px',
              fontSize: '17px',
              padding: '13px',
              height:'370px'
            }} key={review._id}>
              <p style={{
                fontSize: '28px',
              }}>{review.fullName}</p>
              <hr className='testimonial-hr-line'></hr>
              <p>{Stars(review.rating)}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
