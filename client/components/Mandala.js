import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Mandala extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      startOpacity: 1,
      soundOn: true,
      start: true
    }
    this.onStart = this.onStart.bind(this);
    this.fade = this.fade.bind(this);
    // this.fadeOut = this.fadeOut.bind(this);
    this.pause = this.pause.bind(this);
    this.soundToggle = this.soundToggle.bind(this);
  }

  fade(res) {
    let that = this;
    let promise = new Promise(function(resolve, reject) {
      if (that.state.start) {
        that.setState({opacity: 1, startOpacity: 0, start: false});
        resolve({})
      }
      else if (!that.state.start) {
        that.setState({opacity: 0, startOpacity: 1, start: true});
        resolve({})
      }
    });
    return promise;
  }

  pause(res) {
    let that = this;
    let promise = new Promise(function(resolve, reject){
    setTimeout(function() {      
      resolve({});
      }, 2000);
    });
      console.log('state', that.state)
      return promise;
  }

  soundToggle(ev) {
    ev.preventDefault();
    this.setState({soundOn: !this.state.soundOn})
  }

  onStart(ev) {
    ev.preventDefault();
    let audio = new Audio('/sounds/indianBell.wav');
    if (this.state.soundOn && this.state.start) {
      audio.play();
    }
    const playAll = () => {
      this.fade()      
        .then(this.pause)
    }
    playAll();
  }

  render() {
    const { mandala, id } = this.props;
    const { soundOn, opacity, startOpacity } = this.state;
    const { onStart, soundToggle } = this;
    const sound = soundOn ? 'sound on' : 'sound off';
        
    if (!mandala ) {
      return null;
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center', color: 'white', transition: 'all 2s ease-out', opacity: opacity, marginTop: 150}}>
          <img src={mandala.imageURL} width={500} />
        </Grid>

        <Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          <Paper elevation={1} style={{background: 'transparent'}}>
            <h5>{mandala.name}</h5>
            <p>{mandala.description}</p>
          </Paper>
          <div>
            {
              <FormControlLabel
                  control={
                    <Switch
                      checked={soundOn}
                      onChange={soundToggle}
                      value="soundOn"
                      color="primary"
                    />
                  }
                  label={<span style={{ color: 'white' }}><h5>{sound}</h5></span>}
              />
            }
          </div>
          <br />
        </Grid>
        
        <Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: 1, color: 'white'}}>
          <div>
            <button className="btn waves-effect black" style={{opacity: 1}} onClick={onStart}>OM</button>          
          </div>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          <div>
            <Link to={`/mandalas/${id}/edit`}><button className="btn waves-effect orange" style={{marginTop: 50}}>Edit</button></Link>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ mandalas }, { id }) => {
  if (!id) {
    return null;
  }
  const mandala = mandalas.find(mandala => mandala.id === id);
  // console.log('mandala is:', mandala)
  return {
    mandala,
    id
  };
};

export default connect(mapStateToProps)(Mandala);
