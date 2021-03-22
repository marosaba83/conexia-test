import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute (props) {

  const isLoggedIn = !!sessionStorage.getItem('jwt');
  console.log(`isLoggedIn`, isLoggedIn)

  return isLoggedIn
    ? (<Route path={props.path} exact={props.exact} component={props.component} />)
    : (<Redirect to="/" />);
};
