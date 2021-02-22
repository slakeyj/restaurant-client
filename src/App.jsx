import React from 'react';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                exact
                path='/restaurants/:id/update'
                component={UpdatePage}
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
    </ThemeProvider>
  );
};

export default App;
