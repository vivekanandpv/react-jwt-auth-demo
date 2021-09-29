import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSlice } from '../redux-store/auth-slice';

const Navbar = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    dispatch(authSlice.actions.logout());
  };

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          React Auth Demo
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <NavLink to='/' activeClassName='active'>
                <span className='nav-link'>Home</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/authenticated' activeClassName='active'>
                <span className='nav-link'>Authenticated</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' activeClassName='active'>
                <span className='nav-link'>Login</span>
              </NavLink>
            </li>
          </ul>
          <button
            className='btn btn-primary btn-sm ml-auto'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
