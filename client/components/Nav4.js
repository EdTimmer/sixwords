import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, MenuIcon } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Nav4 = (props) => {  //({ mantras, mandalas })
  const { classes } = props;
  return (
    <Fragment>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    
    {/*<div>
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
            </div>*/}
    </Fragment>
  );
};

Nav4.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ mantras, mandalas }) => {
  return {
    mantras,
    mandalas
  };
};


export default connect(mapStateToProps)(withStyles(styles)(Nav4));
