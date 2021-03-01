import React, { useState } from 'react';
import restaurantFinder from '../apis/restaurantFinder';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const AddReview = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('Rating');

  const handleReviewSubmit = async e => {
    try {
      await restaurantFinder.post(`${id}/add-review`, {
        name,
        review: reviewText,
        rating,
      });
      console.log('location.pathname', location.pathname);
      history.push('/');
      history.push(location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mb-2'>
      <form action=''>
        <div className='form-row'>
          <div className='form-group col-8'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              placeholder='Name'
              type='text'
              className='form-control'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group col-4'>
            <label htmlFor='rating'>Rating</label>
            <select
              value={rating}
              onChange={e => setRating(e.target.value)}
              id='rating'
              className='custom-select'
            >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='Review'>Review</label>
          <textarea
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
            id='Review'
            className='form-control'
          ></textarea>
        </div>
        <button
          type='submit'
          onClick={handleReviewSubmit}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
