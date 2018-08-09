import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMantra } from '../store/mantras';
import { saveLine } from '../store/lines';

class MantraCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      text: '',
      sequence: 0
      // userId: this.props.userId
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSave(ev) {
    ev.preventDefault();
    const mantraInfo = {
      name: this.state.name,
      description: this.state.description
    };
    const lineInfo = {
      text: this.state.text,
      sequence: this.state.sequence + 1
    };
    this.props.saveMantra(mantraInfo)
      .then(() => this.props.saveLine(lineInfo));
  }
  render() {
    
    return (
      <div>
        <hr />
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

const mapDispatch = (dispatch, { history, id }) => {
  return {
    saveMantra: (mantraInfo) => dispatch(saveMantra(mantraInfo, history, id)),
  };
};

export default connect(null, mapDispatch)(MantraCreate);
