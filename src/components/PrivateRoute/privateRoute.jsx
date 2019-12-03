import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";



const PrivateRoute = ({ component: Component, userIsAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    userIsAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

export default PrivateRoute;
