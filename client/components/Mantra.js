import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SoundSwitch from './SoundSwitch';

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      opacity: 0,
      startOpacity: 1,
      scale: 1,
      soundOn: true
    };
    this.onStart = this.onStart.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.pause = this.pause.bind(this);
    this.soundToggle = this.soundToggle.bind(this);
    this.initialComponentsFadeOut = this.initialComponentsFadeOut.bind(this);
  }

  initialComponentsFadeOut() {
    this.setState({ startOpacity: 0 });
  }

  fadeIn() {
    console.log('called fadeIn');
    let that = this;
    if (that.state.counter > that.props.mantra.lines.length) {
      that.setState({counter: 0});
    }
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        that.setState({opacity: 1, scale: 1.2});
        resolve({});
      }, 0);
    });
    return promise;
  }  
  
  fadeOut(res) {
    console.log('called fadeOut');
    let that = this;
    let promise = new Promise(function(resolve, reject){
    if (that.state.counter > that.props.mantra.lines.length ){
      that.setState({counter: 0})
    }
    setTimeout(function() {
      that.setState({opacity: 0, scale: 1})
      resolve({});
      }, 3000);
    });
      return promise;
  }
  pause(res) {
    let promise = new Promise(function(resolve, reject){
    setTimeout(function() {

      resolve({});
      }, 2000);
    });
      return promise;
  }

  soundToggle(ev) {
    ev.preventDefault();
    this.setState({soundOn: !this.state.soundOn})
  }

  onStart(ev) {
    ev.preventDefault();
    let audio = new Audio('/sounds/indianBell.wav');
    if (this.state.soundOn) {
      audio.play();
    }
    this.initialComponentsFadeOut();
    // audio.play();
    const playAll = () => {
      this.fadeIn()
      // this.pause()
      // .then(this.fadeIn)
      .then(this.fadeOut)
      .then(this.pause)
      .then(() => {
      if (this.state.counter < this.props.mantra.lines.length - 1) {
        this.setState({counter: this.state.counter + 1});
        playAll();
      }
      else {
        this.setState({counter: 0, startOpacity: 1})
        return null;
      }
      })
      .then(this.pause);
    }
    this.pause()
      .then(playAll)
      .then(this.pause)
    // playAll();
    }

  render() {
    const { mantra, id } = this.props;
    const { counter, soundOn, opacity, startOpacity } = this.state;
    const { onStart, soundToggle } = this;
    console.log('counter is:', counter);
    const soundOnOffText = soundOn ? 'sound on' : 'sound off';
    const soundOpacity = soundOn ? (1) : (0.5);
    
    if (!mantra ) {
      return null;
    }

   
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center', color: 'white'}}>
          <div style={{transition: 'all 2s ease-in-out', opacity: opacity, transform: `scale(${this.state.scale})`, marginTop: 150}}>                       
            <h1>{mantra.lines ? mantra.lines[counter] : null}</h1>       
          </div>
        </Grid>
        
        <Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          <Paper elevation={1} style={{background: 'transparent'}}>
            <h3>{mantra.name}</h3>
            <h5>{mantra.description}</h5>
          </Paper>
            <SoundSwitch soundOpacity={soundOpacity} soundOn={soundOn} soundToggle={soundToggle} soundOnOffText={soundOnOffText} />
          <br />
          <div>
            <button className="btn waves-effect transparent btnBlueBorder" onClick={onStart}>Start</button>         
          </div>
          <div>
            <div style={{margin: 10}}>
              <Link to={`/mantras`}><button className="btn transparent btnGreyBorder" style={{marginTop: 50}}>All Mantras</button></Link>
              <Link to={`/mandalas`}><button className="btn transparent btnGreyBorder" style={{marginTop: 50}}>All Mandalas</button></Link>
            </div>
            <div>
              <Link to={`/mantras/${id}/edit`}><button className="btn transparent btnGreyBorder">Edit this mantra</button></Link>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ mantras }, { id }) => {
  if (!id) {
    return null;
  }
  const mantra = mantras.find(mantra => mantra.id === id);
  return {
    mantra,
    id
  };
};

export default connect(mapStateToProps)(Mantra);
