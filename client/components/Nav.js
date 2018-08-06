import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">Six Words</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/">home</a></li>
            <li><a href="/#/mantras">mantras</a></li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
