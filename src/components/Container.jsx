import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Login from './Login';

const Container = (props) => {
  return (
    <Fragment>
      <div className='container p-5'>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Container;
