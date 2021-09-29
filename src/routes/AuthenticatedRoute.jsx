import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthenticatedRoute = ({ component: Component, role, ...rest }) => {
  const authStatus = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (!authStatus.isLoggedIn) {
            return (
              <Redirect
                to={{ pathname: '/login', state: { from: props.location } }}
              />
            );
          }

          return <Component />;
        }}
      ></Route>
    </Fragment>
  );
};

export default AuthenticatedRoute;
