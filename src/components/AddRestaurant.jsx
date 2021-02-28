import React, { useContext, useState } from 'react';
import restaurantFinder from '../apis/restaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const { setRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await restaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      const response = await restaurantFinder.get('/');
      setRestaurants(response.data.data.restaurant);

      console.log('response', response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mb-4 '>
      <form action=''>
        <div className='form-row'>
          <div className='col'>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              className='form-control'
              placeholder='Name'
            />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Location'
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>
          <div className='col'>
            <select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
              className='custom-select mr-sm-2'
            >
              <option disabled>Price Range</option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
