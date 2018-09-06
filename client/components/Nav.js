import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText, Divider, ListItem } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '@material-ui/icons/Menu';
// import { StringDecoder } from 'string_decoder';

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
  list: {
    width: 200,
    marginLeft: 20
  },
  fullList: {
    width: 'auto'
  }
};

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      left: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({ left: !this.state.left });
  }
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItemText>
            Login/Logout          
          </ListItemText>
        </List>
        <Divider />
        <List>
          <ListItemText>
            <a href="/">Home</a>          
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/mantras">Mantras</a>          
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/mandalas">Mandalas</a>          
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/mantracreate">Create mantra</a>          
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/mandalacreate">Upload new mandala</a>
          </ListItemText>
        </List>
      </div>
    )
    // backgroundColor: "#E65100"

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        {/*style={{backgroundColor: "#FF5722"}}*/}
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu" style={{ background: 'transparent'}}>
              <Menu />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
                onKeyDown={this.toggleDrawer}
              >
                {sideList}
              </div>
            </Drawer>
            <Typography variant="title" color="inherit" className={classes.flex}>
              
            </Typography>
            <Button><a href="/" style={{color: "white"}}>Six Words</a></Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
