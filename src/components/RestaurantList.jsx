import React, { useContext, useEffect } from 'react';
import restaurantFinder from '../apis/restaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useHistory } from 'react-router-dom';
import StarRating from './StarRating';

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();

  const fetchData = async () => {
    try {
      const response = await restaurantFinder.get('/');
      setRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    // keeps event from hitting the row event to go to details page
    e.stopPropagation();
    try {
      const response = restaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
      console.log('delete response', response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = id => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Restaurants</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map(restaurant => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>
                    <StarRating rating={restaurant.average_rating} />
                    <span className='text-warning ml-1'>
                      {restaurant.count ? `(${restaurant.count})` : '(0)'}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={e => handleUpdate(e, restaurant.id)}
                      className='btn btn-warning'
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={e => handleDelete(e, restaurant.id)}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
