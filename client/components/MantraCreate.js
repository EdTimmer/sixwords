import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveMantra } from '../store/mantras';
import LineCreate from './LineCreate';
import { Button, Grid, Paper } from '@material-ui/core';

class MantraCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      line: '',
      lines: [],
      showLineCreate: true,
      showNewLineBtn: false
      // userId: this.props.userId
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onAddLine = this.onAddLine.bind(this);
    this.onNewLine = this.onNewLine.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });  //lines: [ev.target.value]
  }
  onAddLine(ev){
    ev.preventDefault();
    this.setState({ lines: [...this.state.lines, this.state.line], showLineCreate: false, showNewLineBtn: true});
  }
  onSave(ev) {
    ev.preventDefault();
    const mantraInfo = { name: this.state.name, description: this.state.description, lines: this.state.lines };
    this.props.saveMantra(mantraInfo);
  }
  onNewLine(ev) {
    ev.preventDefault();
    this.setState({ showLineCreate: true, showNewLineBtn: false });
  }
  render() {
    const { line, showNewLineBtn } = this.state;
    const { onChange, onAddLine, onSave, onNewLine } = this;
    return (
      <div style={{flexGrow: 1}}>
        <Grid container spacing={24}>
          <Grid item xs={12}>            
            <h4 style={{color: "white", textAlign: "center"}}>New Mantra</h4>
          </Grid>  
          <Grid item xs={4}>
            <Paper style={{textAlign: "center", backgroundColor: 'black'}}>            
              <img src="/images/text.jpg" width={450} />
            </Paper>
          </Grid> 
          <Grid item xs={6}>            
            <form onSubmit={ onSave }>
              <div className="padded">
                <input name="name" onChange={onChange} placeholder="Mantra Name" />
              </div>
              <div className="padded">
                <input name="description" onChange={onChange} placeholder="description" />
              </div>
              <div>
                {
                  this.state.lines.map(line => {
                    return (
                      <div key={this.state.lines.indexOf(line)}>  
                        <h5 className="white-text padded">{line.toString()}</h5>
                      </div>
                    )
                  })
                }
              </div>          
              <div className="white-text padded">
                {
                  this.state.showLineCreate ? (<LineCreate onChange={this.onChange} onAddLine={this.onAddLine} line={this.state.line} />) : null
                }
              </div>
              <div className="padded">
                {
                  showNewLineBtn ? (<button className="btn" onClick={onNewLine}>New Line</button>) : (null)
                }                
              </div>
              <div className="padded" style={{textAlign: "center"}}>
                <button className="btn" type="submit"> Save Mantra </button>
              </div>            
            </form>
          </Grid>  
          <Grid item xs={2}>
            <Paper style={{textAlign: "center", backgroundColor: 'black'}}>            
            </Paper>
          </Grid> 
 
        </Grid>
      </div>
    )
  }
}

// const mapState = ({ people, albums }, { personId }) => {
//   // const person = people.find(person => person.id === userId);
//   return {
//     // userId,
//     personId
//   };
// };

const mapDispatch = (dispatch, { history }) => {
  return {
    saveMantra: (mantraInfo) => dispatch(saveMantra(mantraInfo, history))
  };
};

export default connect(null, mapDispatch)(MantraCreate);
