import axios from 'axios';
// 'https://slakey-restaurant-server.herokuapp.com/api/v1/restaurants'
export default axios.create({
  baseURL: 'http://localhost:3005/api/v1/restaurants',
});
