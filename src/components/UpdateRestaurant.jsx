import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import restaurantFinder from '../apis/restaurantFinder';

const UpdateRestaurant = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await restaurantFinder.get(`/${id}`);
      console.log('update response', response);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await restaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    history.push('/');
  };
  return (
    <div>
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type='text'
            id='name'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            value={location}
            onChange={e => setLocation(e.target.value)}
            type='text'
            id='location'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price-range'>Price Range</label>
          <input
            value={priceRange}
            onChange={e => setPriceRange(e.target.value)}
            type='number'
            id='price-range'
            className='form-control'
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
