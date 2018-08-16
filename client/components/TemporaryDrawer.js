import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // top: false,
      left: false,
      // bottom: false,
      // right: false,
    }
  }
  // state = {
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // };

  // toggleDrawer = (side, open) => () => {
  //   this.setState({
  //     [side]: open,
  //   });
  // };
    toggleDrawer() {
      this.setState({left: !this.state.left})
    }
  //     = (side, open) => () => {
  //   this.setState({
  //     [side]: open,
  //   });
  // };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>one</List>
        <Divider />
        <List>two</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>one</List>
        <Divider />
        <List>two</List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer}>Open Left</Button>
        
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
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
