import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText, Divider, ListItem } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    width: 200
  },
  fullList: {
    width: 'auto'
  }
};

class Nav5 extends React.Component {
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
            <a href="/">home</a>          
          </ListItemText>
        </List>
        <Divider />
        <List>
          <ListItemText>
            <a href="/#/mantracreate">create mantra</a>          
          </ListItemText>
        </List>
        <Divider />
        <List>
          <ListItemText>
            <a href="/#/mandalacreate">create mandala</a>
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/mantras">mantras</a>          
          </ListItemText>
        </List>
        <Divider />
        <List>
          <ListItemText>
            <a href="/#/mandalas">mandalas</a>          
          </ListItemText>
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: "#E65100"}}>
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
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
              Six Words
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav5.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav5);
