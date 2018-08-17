import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { deleteMantra, updateMantra } from '../store/mantras';

class MantraEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true
    };
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(ev) {
    ev.preventDefault();
    const mantraInfo = {
      id: this.props.mantra.id
    }
    this.props.deleteMantra(mantraInfo);
  }
  render() {
    const { mantra } = this.props; 
    // const { lines } = this.props.mantra.lines;
    const { onDelete } = this;
    console.log(mantra);
    return (
      <div>
      <hr />
      <h5 className="white-text">
        {
          mantra ? mantra.name : null
        }
      </h5>
      <div className="white-text">
        {
          mantra ? (
            mantra.lines.map(line => {
              return (
                <p key={mantra.lines.indexOf(line)}>
                  {line}
                </p>
              )
            })
          ) : null
        }
      </div>
        {/*
          
        */}
      <div>
        <button className="white-text btn" onClick={onDelete}>Delete</button>
      </div>
      </div>
    )
    
  }
}

const mapStateToProps = ({ mantras }, { id }) => {
  if (!id) {
    return null;
  }
  const mantra = mantras.find(mantra => mantra.id === id);
  return {
    mantra
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    deleteMantra: (mantraInfo) => dispatch(deleteMantra(mantraInfo, history)),
    updateMantra: (mantraInfo) => dispatch(updateMantra(mantraInfo, history))
  };
};

export default connect(mapStateToProps, mapDispatch)(MantraEdit);
