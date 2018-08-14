import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMandala } from '../store/mandalas';

class MandalaCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageURL: this.props.mandala ? this.props.mandala.imageURL : null,
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.previewFile = this.previewFile.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });  
  }
  previewFile() {
    const preview = document.querySelector('img');
    const file = preview ? document.querySelector('input[type=file]').files[0] : null;
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const image = reader.result;
      this.setState({ imageURL: image });
      preview.src = image;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  onSave(ev) {
    ev.preventDefault();
    const mandalaInfo = this.state;
    console.log('mandalaInfo is:', mandalaInfo)
    this.props.saveMandala(mandalaInfo);
  }
  render() {
    const { onChange, onSave, previewFile } = this;
    return (
      <div>
        <div className="padded">
          <h3>New Mandala</h3>
          <form onSubmit={ onSave }>
            <div>
              <input name="name" onChange={onChange} placeholder="Mandala Name" />
            </div>
            <div>
              <label htmlFor='imageURL'>New Photo: </label><br />
              <input type="file" name='imageURL' onChange={previewFile} />
              <img src="/images/Preview-icon.png" alt="Image preview..." width={100} /> 
            </div>
            <button className="btn waves-effect green darken-4" type="submit"> Make Mandala </button>
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
