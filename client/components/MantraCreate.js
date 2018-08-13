import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMantra } from '../store/mantras';

class MantraCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      // description: '',
      line: '',
       lines: []
      // userId: this.props.userId
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onAddLine = this.onAddLine.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });  //lines: [ev.target.value]
  }
  // onAddLine(ev) {
  //   console.log('this.state.lines before adding is:', this.state.lines)
  //   this.setState({ line: this.state.lines.push(ev.target.value)})
  //     // .then(() => console.log('this.state.lines is:', this.state.lines))
  // }
  onAddLine(ev){
    ev.preventDefault();
    this.setState({lines: this.state.lines.concat([this.state.line])}) 
}
  onSave(ev) {
    ev.preventDefault();
    const mantraInfo = this.state;
    // console.log('mantraInfo is:', mantraInfo)
    this.props.saveMantra(mantraInfo);
    // console.log('this.state.name is:', this.state.name)
  }
  render() {
    const { line1, line2, line, lines } = this.state;
    const { onChange, onAddLine, onAddLine2, onSave } = this;
    return (
      <div>
        <div>
          <h3>New Mantra</h3>
          <div>
            <input name="line" onChange={onChange} placeholder="line" />
            <div>
              <button className="btn" value={ line } onClick={onAddLine}>Add Line</button>          
            </div>
          </div>
          <div>
          <input name="line" onChange={onChange} placeholder="line" />
            <div>
              <button className="btn" value={ line } onClick={onAddLine}>Add Line</button>          
            </div>
          </div>
          <form onSubmit={ onSave }>
            <div>
              <input name="name" onChange={onChange} placeholder="Mantra Name" />
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
