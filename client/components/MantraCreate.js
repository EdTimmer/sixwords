import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMantra } from '../store/mantras';
import LineCreate from './LineCreate';

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
      <div>
        <div>
          <h3>New Mantra</h3>
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
                    <div className="white-text">{line.toString()}</div>
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
          <div className="padded">
            <button className="btn" type="submit"> Make Mantra </button>
          </div>

            
          </form>
        </div>
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
