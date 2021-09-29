import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import AuthenticatedRoute from '../routes/AuthenticatedRoute';
import Login from './Login';
import Authenticated from './Authenticated';
import Home from './Home';
import NotFound from './NotFound';
import Unauthorized from './Unauthorized';
import Authorized from './Authorized';
import AuthorizedRoute from '../routes/AuthorizedRoute';

const Container = (props) => {
  return (
    <Fragment>
      <div className='container p-5'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <AuthenticatedRoute
            exact
            path='/authenticated'
            component={Authenticated}
          />
          <Route exact path='/' component={Home} />
          <AuthorizedRoute
            exact
            path='/authorized'
            role='admin'
            component={Authorized}
          />
          <Route exact path='/unauthorized' component={Unauthorized} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default Container;
