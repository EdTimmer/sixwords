import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light container">
      <div className="nav-link">
        <NavLink to="/" className="navbar home">home</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/mantras" className="navbar">mantras</NavLink>
      </div>
    </div>
  );
};

export default Nav;
