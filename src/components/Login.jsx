import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { httpClient } from '../http/http-client';
import { authSlice } from '../redux-store/auth-slice';
import { decode } from '../utils/jwt-utils';

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth);

  const inputHandler = (e) => {
    setFormData((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    httpClient.post('auth/login', formData).then((res) => {
      sessionStorage.setItem('token', res.data.jwt);
      const userInfo = decode(res.data.jwt);
      dispatch(authSlice.actions.login({ userInfo, token: res.data.jwt }));

      const redirectPath = props.location.state?.returnUrl;

      if (redirectPath) {
        history.push(redirectPath);
      }
    });
  };

  return (
    <Fragment>
      <h3>Login</h3>
      <pre>{JSON.stringify(authStatus, null, 2)}</pre>
      <hr />
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            onChange={inputHandler}
            value={formData.username}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={inputHandler}
            value={formData.password}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
