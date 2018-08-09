import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ mantras }) => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <a href="#" className="brand-logo right">Six Words</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="" className="dropdown-button" data-activates="dropdown1" data-beloworigin="true">account<i className="material-icons right">arrow_drop_down</i></a></li>
              <ul id="dropdown1" className="dropdown-content">
                <li><a href="/#/mantracreate">create</a></li>
                <li><a href="#!">two</a></li>
              </ul>
            <li><a href="" className="dropdown-button" data-activates="dropdown2" data-constrainwidth="false" data-beloworigin="true">mantras<i className="material-icons right">arrow_drop_down</i></a></li>
              <ul id="dropdown2" className="dropdown-content">
              {
                mantras.map(mantra => {
                  return (
                    <li key={mantra.id}>
                      <a href={`/#/mantras/${mantra.id}`}>{mantra.name}</a>
                    </li>
                  )
                })
              }               
              </ul>
            {/*<li><a href="/#/mantras">mantras</a></li>*/}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ mantras }) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Nav);
