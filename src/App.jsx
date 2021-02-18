import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import UpdateRestaurant from './pages/UpdateRestaurant';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/restaurants/:id/update'
            component={UpdateRestaurant}
          />
          <Route exact path='/restaurants/:id' component={RestaurantDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
