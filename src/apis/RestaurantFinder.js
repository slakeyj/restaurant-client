import axios from 'axios';

// NODE_ENV = 'development'
// NODE_ENV = 'production'

// if we are in production, use baseurl = /api/v1/restaurants
// if we are in development, use baseurl = http://localhost:3005/api/v1/restaurants

const baseURL =
  process.env.NODE_ENV === 'prudction'
    ? 'api/v1/restaurants'
    : 'http://localhost:3005/api/v1/restaurants';

export default axios.create({
  baseURL,
});
