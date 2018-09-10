import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SoundSwitch from './SoundSwitch';
import Footer from './Footer';

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
    let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {

      resolve({});
      }, 2000);
    });
      return promise;
  }

  soundToggle(ev) {
    ev.preventDefault();
    this.setState({soundOn: !this.state.soundOn});
  }

  onStart(ev) {
    ev.preventDefault();
    let audio = new Audio('/sounds/indianBell.wav');
    if (this.state.soundOn) {
      audio.play();
    }
    this.initialComponentsFadeOut();
    const playAll = () => {
      this.fadeIn()
      .then(this.fadeOut)
      .then(this.pause)
      .then(() => {
      if (this.state.counter < this.props.mantra.lines.length - 1) {
        this.setState({counter: this.state.counter + 1});
        playAll();
      }
      else {
        this.setState({counter: 0, startOpacity: 1});
        return null;
      }
      })
      .then(this.pause);
    }
    this.pause()
      .then(playAll)
      .then(this.pause);
  }

  render() {
    const { mantra, id } = this.props;
    const { counter, soundOn, opacity, startOpacity } = this.state;
    const { onStart, soundToggle } = this;
    
    if (!mantra ) {
      return null;
    }
       
    return (
      <Grid container spacing={24} justify="center">
        <Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          <h3>{mantra.name}</h3>
          <h5>{mantra.description}</h5>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={8} style={{textAlign: 'center', color: 'white'}}>
          <div style={{transition: 'all 2s ease-in-out', opacity: opacity, transform: `scale(${this.state.scale})`, marginTop: 50}}>                       
            <h1 style={{fontStyle: "italic"}}>{mantra.lines ? mantra.lines[counter] : null}</h1>
          </div>
        </Grid>
        <Grid item xs={2} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          <div>
            {
              mantra.name === 'Six Words' ? (
                <div>
                  <a href="http://unfetteredmind.org/tilopas-advice/" rel="noopener noreferrer" target="_blank"><h5>About This Mantra</h5></a>
                  <a href="https://en.wikipedia.org/wiki/Tilopa" rel="noopener noreferrer" target="_blank"><h5>About Tilopa</h5></a>
                </div>
                ) : (null)
            }
          </div>
          <div>
            <SoundSwitch soundToggle={soundToggle} soundOn={soundOn} />
          </div>
          <br />
          <div>
            <button className="btn waves-effect transparent btnBlueBorder" onClick={onStart}>Start</button>
          </div>
          <div style={{marginTop: 100}}>
            <Link to={`/mantras/${id}/edit`}><button className="btn transparent btnGreyBorder">Edit</button></Link>
          </div>
        </Grid>
        
        {/*<Grid item xs={12} style={{textAlign: 'center', transition: 'all 2s ease-out', opacity: startOpacity, color: 'white'}}>
          <Paper elevation={1} style={{background: 'transparent'}}>
            <h3>{mantra.name}</h3>
            <h5>{mantra.description}</h5>
            <div>
              {
                mantra.name === 'Six Words' ? (
                  <div>
                    <a href="http://unfetteredmind.org/tilopas-advice/" rel="noopener noreferrer" target="_blank"><h5>About This Mantra</h5></a>
                    <a href="https://en.wikipedia.org/wiki/Tilopa" rel="noopener noreferrer" target="_blank"><h5>About Tilopa</h5></a>
                  </div>
                  ) : (null)
              }
            </div>
          </Paper>
          <div>
            <SoundSwitch soundToggle={soundToggle} soundOn={soundOn} />
          </div>
          <br />
          <div>
            <button className="btn waves-effect transparent btnBlueBorder" onClick={onStart}>Start</button>
          </div>
          <div>
            <div>
              <Link to={`/mantras/${id}/edit`}><button className="btn transparent btnGreyBorder">Edit</button></Link>
            </div>
          </div>
            </Grid>*/}
        <Grid item xs={12} style={{textAlign: 'center', marginTop: 150, transition: 'all 2s ease-out', opacity: startOpacity}} className="footer">
          <Footer />
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
