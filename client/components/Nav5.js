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
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class Nav5 extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     left: false
  //   }
  //   // this.toggleDrawer = this.toggleDrawer.bind(this);
  // }
  
  
  // toggleDrawer(side, open) {
  //   this.setState({
  //     [side]: open
  //   })
  // }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  }
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItemText>
            one
          </ListItemText>
        </List>
        <Divider />
        <List>
          <ListItemText>
            two
          </ListItemText>
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton  className={classes.menuButton} color="inherit" aria-label="Menu"> 
            {/* onClick={this.toggleDrawer('left', true)} */}
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
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


// (props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             Six Words
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

Nav5.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav5);
