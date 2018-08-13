import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMandala } from '../store/mandalas';

class MandalaCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });  
  }
  
  onSave(ev) {
    ev.preventDefault();
    const mandalaInfo = this.state;
    this.props.saveMandala(mandalaInfo);
  }
  render() {
    const { onChange, onSave } = this;
    return (
      <div>
        <div>
          <h3>New Mandala</h3>
          <form onSubmit={ onSave }>
            <div>
              <input name="name" onChange={onChange} placeholder="Mandala Name" />
            </div>
            <button type="submit"> Make Mandala </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    saveMandala: (mandalaInfo) => dispatch(saveMandala(mandalaInfo))
  };
};

export default connect(null, mapDispatch)(MandalaCreate);
