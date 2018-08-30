import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { deleteMantra, updateMantra } from '../store/mantras';
import LineCreate from './LineCreate';

class MantraEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.mantra ? this.props.mantra.id : '',
      name: this.props.mantra ? this.props.mantra.name : '',
      description: this.props.mantra ? this.props.mantra.description : '',
      lines: this.props.mantra ? this.props.mantra.lines : '',
      line: '',
      showLineCreate: false,
      showNewLineBtn: true
    };
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleLineChange = this.handleLineChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDeleteLine = this.onDeleteLine.bind(this);
    this.onAddLine = this.onAddLine.bind(this);
    this.onNewLine = this.onNewLine.bind(this);
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

  onChange(ev) {
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
    this.props.updateMantra(
      {
        id: this.state.id,
        name: this.state.name,
        description: this.state.description,
        lines: this.state.lines
      }
    );
  }

  onDeleteLine(ev) {
    ev.preventDefault();
    let newArr = this.state.lines.slice();
    let index = ev.target.name;
    newArr.splice(index, 1);
    this.setState({ lines: newArr });
  }

  onNewLine(ev) {
    ev.preventDefault();
    this.setState({ showLineCreate: true, showNewLineBtn: false });
  }

  onAddLine(ev){
    ev.preventDefault();
    this.setState({ lines: [...this.state.lines, this.state.line], showLineCreate: false, showNewLineBtn: true});
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
    const { name, description, lines, line, showLineCreate, showNewLineBtn } = this.state;
    const { onDelete, onDeleteLine, onChange, handleLineChange, handleSubmit, onNewLine, onAddLine } = this;
    // if (!mantra) {
    //   return null;
    // }

    return (
      <div style={{flexGrow: 1}}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <h4 style={{color: "white", textAlign: "center"}}>{name}</h4>
            <h4 style={{color: "white", textAlign: "center", marginBottom: "80px"}}>Edit Mantra</h4>
          </Grid>  
          <Grid item xs={2}>
            <Paper style={{textAlign: "center", background: 'transparent'}}>             
            </Paper>
          </Grid> 
          <Grid item xs={8}>            
            <div className="white-text">
              <form onSubmit={ handleSubmit } className="white-text">
                <div>
                  <h5>Name:</h5>
                </div>
                <div>
                  {
                    mantra ? (
                      <input value={ name } name="name" onChange={ onChange } />
                    ) : (null)
                  }
                </div>
                <div>
                  <h5>Description:</h5>
                </div>
                <div>
                  {
                    mantra ? (
                      <input value={ description } name="description" onChange={ onChange } />
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
                          <div key={lines.indexOf(line)} style={{display: 'flex', flexDirection: 'row'}}>
                            <input value={line} name={lines.indexOf(line)} onChange={ handleLineChange } />
                            <button className="white-text btn red" name={lines.indexOf(line)} onClick={ onDeleteLine }>X</button>                      
                          </div>
                        );
                      })
                    ) : null
                  }
                </div>
                <div className="white-text padded">
                  {
                    showLineCreate ? (<LineCreate onChange={this.onChange} onAddLine={onAddLine} line={line} />) : null
                  }
                </div>
                <div className="padded">
                  {
                    showNewLineBtn ? (<button className="btn" onClick={onNewLine}>New Line</button>) : (null)
                  }                
                </div>
                <br />
                <div>
                  <button className="white-text btn" onClick={onChange}>Update Mantra</button>
                </div>
              </form>
              <br />
              <div>
                <button className="white-text btn red" onClick={onDelete}>Delete Mantra</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Paper style={{textAlign: "center", backgroundColor: 'black'}}>            
            </Paper>
          </Grid>
        </Grid>
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
