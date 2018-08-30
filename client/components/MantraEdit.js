import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { deleteMantra, updateMantra } from '../store/mantras';

class MantraEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.mantra ? this.props.mantra.id : '',
      name: this.props.mantra ? this.props.mantra.name : '',
      description: this.props.mantra ? this.props.mantra.description : '',
      lines: this.props.mantra ? this.props.mantra.lines : ''
    };
    this.onDelete = this.onDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLineChange = this.handleLineChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDeleteLine = this.onDeleteLine.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mantra) {
      this.setState({
        id: nextProps.mantra.id,
        name: nextProps.mantra.name,
        description: nextProps.mantra.description,
        lines: nextProps.mantra.lines
      })
    }
  }

  handleChange(ev) {
    this.setState({ [ ev.target.name ]: ev.target.value });
  }

  handleLineChange(ev) {
    let newArr = this.state.lines.slice();
    let index = ev.target.name;
    newArr[index] = ev.target.value;
    this.setState({ lines: newArr });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.updateMantra(this.state);
  }

  onDeleteLine(ev) {
    ev.preventDefault();
    let newArr = this.state.lines.slice();
    let index = ev.target.name;
    newArr.splice(index, 1);
    this.setState({ lines: newArr });
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
    const { name, description, lines } = this.state;
    const { onDelete, onDeleteLine, handleChange, handleLineChange, handleSubmit } = this;
    // if (!mantra) {
    //   return null;
    // }

    return (
      <div className="white-text">
        <form onSubmit={ handleSubmit } className="white-text">
          <div>
            <h5>Name:</h5>
          </div>
          <div>
          {
            mantra ? (
              <input value={ name } name="name" onChange={ handleChange } />
            ) : (null)
          }
          </div>
          <div>
            <h5>Description:</h5>
          </div>
          <div>
            {
              mantra ? (
                <input value={ description } name="description" onChange={ handleChange } />
              ) : (null)
            }
          </div>
          <div>
            <h5>Lines:</h5>
          </div>
          <div className="white-text">
            {
              mantra ? (
                lines.map(line => {
                  return (
                    <div key={lines.indexOf(line)}>
                      <input value={line} name={lines.indexOf(line)} onChange={ handleLineChange } />
                      <div>
                        <button className="white-text btn" name={lines.indexOf(line)} onClick={ onDeleteLine }>Delete Line</button>
                      </div>
                    </div>
                  );
                })
              ) : null
            }
          </div>
          <br />
          <div>
            <button className="white-text btn" onClick={handleChange}>Update Mantra</button>
          </div>
        </form>
        <br />
        <div>
          <button className="white-text btn" onClick={onDelete}>Delete Mantra</button>
        </div>
      </div>
    );
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
