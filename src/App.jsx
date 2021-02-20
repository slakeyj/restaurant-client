import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import UpdateRestaurant from './pages/UpdateRestaurant';
const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/restaurants/:id/update'
              component={UpdateRestaurant}
            />
            <Route
              exact
              path='/restaurants/:id'
              component={RestaurantDetails}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
