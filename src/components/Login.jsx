import React, { Fragment, useState } from 'react';

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (e) => {
    setFormData((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <h3>Login</h3>
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
