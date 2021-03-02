import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="d-flex px-5 justify-content-between align-items-center Navbar py-3">
        <div className="d-flex">
          <img src={require('../img/logo.svg').default} alt="" />
          <ul className="list-unstyled link-wrapper d-flex align-items-center mx-4 my-0">
            <li className="mx-3">
              <Link
                className={
                  window.location.pathname === '/'
                    ? 'text-white'
                    : 'inactive-link'
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link
                className={
                  window.location.pathname === '/dashboard'
                    ? 'text-white'
                    : 'inactive-link'
                }
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="mx-3">
              <Link
                className={
                  window.location.pathname === '/purchase'
                    ? 'text-white'
                    : 'inactive-link'
                }
                to="/purchase"
              >
                Purchase
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <button
            className="border-0"
            style={{ backgroundColor: 'transparent' }}
          >
            <img src={require('../img/message.svg').default} alt="" />
          </button>
          <button
            className="logout-btn border-0 bg-white ml-3 px-4 btn py-1 font-weight-bold"
            style={{ fontSize: '14px' }}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
