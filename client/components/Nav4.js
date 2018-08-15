import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';

const Nav4 = ({ mantras, mandalas }) => {
  return (
    <Fragment>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">
          Six Words
        </Typography>
      </Toolbar>
    </AppBar>
    
    <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <a href="#" className="brand-logo right">Six Words</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="" className="dropdown-button" data-activates="dropdown1" data-beloworigin="true">account<i className="material-icons right">arrow_drop_down</i></a></li>
              <ul id="dropdown1" className="dropdown-content"> 
                <li><a href="/#/mantracreate">create mantra</a></li>
                <li><a href="/#/mandalacreate">create mandala</a></li>
              </ul>
            <li><a href="" className="dropdown-button" data-activates="dropdown2" data-constrainwidth="false" data-beloworigin="true">mantras<i className="material-icons right">arrow_drop_down</i></a></li>
              <ul id="dropdown2" className="dropdown-content">
              {
                mantras.map(mantra => {
                  return (
                    <li key={mantra.id}>
                      <a href={`/#/mantras/${mantra.id}`}>{mantra.name}</a>
                    </li>
                  );
                })
              }
              </ul>
            <li><a href="" className="dropdown-button" data-activates="dropdown3" data-constrainwidth="false" data-beloworigin="true">mandalas<i className="material-icons right">arrow_drop_down</i></a></li>
              <ul id="dropdown3" className="dropdown-content">
              {
                mandalas.map(mandala => {
                  return (
                    <li key={mandala.id}>
                      <a href={`/#/mandalas/${mandala.id}`}>{mandala.name}</a>
                    </li>
                  );
                })
              }
              </ul>
          </ul>
        </div>
      </nav>
    </div>
    </Fragment>
  );
};

const mapStateToProps = ({ mantras, mandalas }) => {
  return {
    mantras,
    mandalas
  };
};


export default connect(mapStateToProps)(Nav4);
