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
    this.onUpdate = this.onUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeLine = this.onChangeLine.bind(this);
  }

  onChange(ev) {
    this.setState({ [ ev.target.name ]: ev.target.value });
  }

  onChangeLine(ev) {
    this.setState({});
  }

  onUpdate(ev) {
    ev.preventDefault()

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
        <button className="white-text btn" onClick={onUpdate}>Update</button>
      </div>
      <div>
        <button className="white-text btn" onClick={onDelete}>Delete</button>
      </div>
      </div>
    )
    
  }
}

const mapState = ({mantras}, { id }) => {
  const mantra = mantras.find(mantra => mantra.id === id);
  return {
    mantra,
    id
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    deleteMantra: (mantraInfo) => dispatch(deleteMantra(mantraInfo, history)),
    updateMantra: (mantraInfo) => dispatch(updateMantra(mantraInfo, history))
  };
};

export default connect(mapState, mapDispatch)(MantraEdit);
