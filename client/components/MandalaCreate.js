import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { saveMandala } from '../store/mandalas';
import { Button, Grid, Paper } from '@material-ui/core';
import Footer from './Footer';

class MandalaCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
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
      <div style={{flexGrow: 1, color: "white"}}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <h4 className="padded" style={{textAlign: "center", marginBottom: "80px"}}>New Mandala</h4>
          </Grid>
          <Grid item xs={1}>
            <Paper style={{textAlign: "center", backgroundColor: 'black'}}>            
            </Paper>
          </Grid> 
          <Grid item xs={5}>
            <form onSubmit={ onSave }>
              <div>
                <input name="name" onChange={onChange} placeholder="Mandala Name" />
              </div>
              <div>
                <input name="description" onChange={onChange} placeholder="description (optional)" />
              </div>
              {/*<div className="padded">
                <label htmlFor='imageURL' style={{fontSize: 20}}>New Image:</label><br />
                <input type="file" name='imageURL' onChange={previewFile} />
                <img src="/images/Preview-icon.png" alt="Image preview..." width={100} />
                </div>*/}
              <div className="padded" style={{textAlign: 'center'}}>
                <label htmlFor="file-upload" className="custom-file-upload">
                  SELECT IMAGE
                </label>
                <input id="file-upload" type="file" name="imageURL" onChange={previewFile} />
              </div>
              <div className="padded" style={{textAlign: 'center'}}>
                <button className="btn transparent btnBlueBorder" type="submit">Save</button>
              </div>
            </form>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{textAlign: "center", background: 'transparent'}}>
              <img src="/images/mandalapurple.jpg" width={400} />
            </Paper>
          </Grid>
          <Grid item xs={12} className="footer">
            <Footer />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapDispatch = (dispatch, { history }) => {
  return {
    saveMandala: (mandalaInfo) => dispatch(saveMandala(mandalaInfo, history))
  };
};

export default connect(null, mapDispatch)(MandalaCreate);
