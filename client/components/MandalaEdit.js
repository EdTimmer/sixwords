import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { deleteMandala, updateMandala } from '../store/mandalas';

class MandalaEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.mandala ? this.props.mandala.id : '',
      name: this.props.mandala ? this.props.mandala.name : '',
      description: this.props.mandala ? this.props.mandala.description : '',
      imageURL: this.props.mandala ? this.props.mandala.imageURL : ''
    };
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleLineChange = this.handleLineChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onDeleteLine = this.onDeleteLine.bind(this);
    // this.onAddLine = this.onAddLine.bind(this);
    // this.onNewLine = this.onNewLine.bind(this);
    this.previewFile = this.previewFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mandala) {
      this.setState({
        id: nextProps.mandala.id,
        name: nextProps.mandala.name,
        description: nextProps.mandala.description,
        imageURL: nextProps.mandala.imageURL
      })
    }
  }

  onChange(ev) {
    this.setState({ [ ev.target.name ]: ev.target.value });
  }

  // handleLineChange(ev) {
  //   let newArr = this.state.lines.slice();
  //   let index = ev.target.name;
  //   newArr[index] = ev.target.value;
  //   this.setState({ lines: newArr });
  // }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.updateMandala(
      {
        id: this.state.id,
        name: this.state.name,
        description: this.state.description,
        imageURL: this.state.imageURL
      }
    );
  }

  onDelete(ev) {
    ev.preventDefault();
    const mandalaInfo = {
      id: this.props.mandala.id
    }
    this.props.deleteMandala(mandalaInfo);
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

  render() {
    const { mandala } = this.props;
    const { id, name, description, lines, line, showLineCreate, showNewLineBtn } = this.state;
    const { onDelete, previewFile, onDeleteLine, onChange, handleLineChange, handleSubmit, onNewLine, onAddLine } = this;
    // if (!mandala) {
    //   return null;
    // }

    return (
      <div style={{flexGrow: 1}}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <h4 style={{color: "white", textAlign: "center"}}><Link to={`/mandalas/${id}`}>{name}</Link></h4>
            <h5 style={{color: "white", textAlign: "center", marginBottom: "80px"}}>edit mandala</h5>
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
                    mandala ? (
                      <input value={ name } name="name" onChange={ onChange } />
                    ) : (null)
                  }
                </div>
                <div>
                  <h5>Description:</h5>
                </div>
                <div>
                  {
                    mandala ? (
                      <input value={ description } name="description" onChange={ onChange } />
                    ) : (null)
                  }
                </div>
                <div>
                  <h5>Image:</h5>
                </div>
                <div className="white-text">
                  {
                    mandala ? (
                      <img src={mandala.imageURL} width={200} />
                    ) : null
                  }
                </div>
                <div className="padded">                
                  <input type="file" name='imageURL' onChange={previewFile} />
                </div>
                <br />
                <div style={{textAlign: 'center'}}>
                  <button className="white-text btn" onClick={onChange}>Update mandala</button>
                </div>
              </form>
              <br />
              <div style={{textAlign: 'right'}}>
                <button className="white-text btn red" onClick={onDelete}>Delete mandala</button>
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

const mapState = ({mandalas}, { id }) => {
  const mandala = mandalas.find(mandala => mandala.id === id);
  return {
    mandala,
    id
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    deleteMandala: (mandalaInfo) => dispatch(deleteMandala(mandalaInfo, history)),
    updateMandala: (mandalaInfo) => dispatch(updateMandala(mandalaInfo, history))
  };
};

export default connect(mapState, mapDispatch)(MandalaEdit);
