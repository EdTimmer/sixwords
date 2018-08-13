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
      showLineCreate: true
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
    this.setState({ lines: [...this.state.lines, this.state.line], showLineCreate: false});
  }
  onSave(ev) {
    ev.preventDefault();
    const mantraInfo = { name: this.state.name, description: this.state.description, lines: this.state.lines };
    this.props.saveMantra(mantraInfo);
  }
  onNewLine(ev) {
    ev.preventDefault();
    this.setState({ showLineCreate: true });
  }
  render() {
    const { line } = this.state;
    const { onChange, onAddLine, onSave, onNewLine } = this;
    return (
      <div>
        <div>
          <h3>New Mantra</h3>
          <form onSubmit={ onSave }>

            <div>
              <input name="name" onChange={onChange} placeholder="Mantra Name" />
            </div>

            <div>
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
          <br />
          <div className="white-text padded">
            {
              this.state.showLineCreate ? (<LineCreate onChange={this.onChange} onAddLine={this.onAddLine} line={this.state.line} />) : null
            }
          </div>
          <br />

          <div>
            <button className="btn" onClick={onNewLine}>New Line</button>
          </div>

            <button type="submit"> Make Mantra </button>
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
    saveMantra: (mantraInfo) => dispatch(saveMantra(mantraInfo))
  };
};

export default connect(null, mapDispatch)(MantraCreate);
