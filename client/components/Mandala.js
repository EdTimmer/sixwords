import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SoundSwitch from './SoundSwitch';

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
    this.fadeIn = this.fadeIn.bind(this);
    // this.fadeInOut = this.fadeInOut.bind(this);
    this.pause = this.pause.bind(this);
    this.soundToggle = this.soundToggle.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }

  fadeIn(res) {
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

  fadeOut() {
    this.setState({opacity: 0, startOpacity: 1, start: true})
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
      this.fadeIn()      
        .then(this.pause)
    }
    playAll();
  }

  render() {
    const { mandala, id } = this.props;
    const { soundOn, opacity, startOpacity, start } = this.state;
    const { onStart, soundToggle, fadeOut } = this;
    const soundOnOffText = soundOn ? 'sound on' : 'sound off';
    const action = start ? (<img src={"/images/play.png"} width={55} />) : (<img src={"/images/stop.png"} width={55} />);
    const soundOpacity = soundOn ? (1) : (0.5);
        
    if (!mandala ) {
      return null;
    }
    return (
      <div style={{flexGrow: 1, color: "white"}}>
        <Grid container spacing={24}>
          <Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
            <Paper elevation={1} style={{background: 'transparent'}}>
              <h5>{mandala.name}</h5>
              <p>{mandala.description}</p>
            </Paper>
          </Grid>


          <Grid item xs={2} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
            <div>
              <div>
                <Link to={`/mandalas`}><button className="btn transparent btnGreyBorder" style={{margin: 5}}>All Mandalas</button></Link>
              </div>
              <div>
                <Link to={`/mantras`}><button className="btn transparent btnGreyBorder" style={{margin: 5}}>All Mantras</button></Link>
              </div>
              <div>
                <Link to={`/mandalas/${id}/edit`}><button className="btn transparent btnGreyBorder" style={{margin: 5}}>Edit this mandala</button></Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} style={{textAlign: 'center', color: 'white', transition: 'all 2s ease-in-out', opacity: opacity, marginTop: 50}}>
            <img onClick={fadeOut} src={mandala.imageURL} width={500} />
          </Grid>
          
          <Grid item xs={2} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          
          <SoundSwitch soundOpacity={soundOpacity} soundOn={soundOn} soundToggle={soundToggle} soundOnOffText={soundOnOffText} />
            
          <div>
            <button className="btn waves-effect transparent btnBlueBorder" onClick={onStart} style={{marginTop: 30}}>
              start
            </button>  
            <p><i>click image to return</i></p>
          </div>

          </Grid>
        </Grid>
      </div>
      
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
