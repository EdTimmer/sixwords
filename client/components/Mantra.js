import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      startDisable: false,
      opacity: 0,
      scale: 1,
      soundOn: true
    }
    this.onStart = this.onStart.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.pause = this.pause.bind(this);
    this.soundToggle = this.soundToggle.bind(this);
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
      }, 1000);
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
      }, 4000);
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
    this.setState({startDisable: true});
    let audio = new Audio('/sounds/indianBell.wav');
    if (this.state.soundOn) {
      audio.play();
    }
    // audio.play();
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
          this.setState({counter: 0, startDisable: false})
          return null;
        }
      })
    }
    playAll();
  }

  render() {
    const { mantra, id } = this.props;
    const { counter, startDisable } = this.state;
    const { onStart, soundToggle } = this;
    console.log('counter is:', counter);
    
    if (!mantra ) {
      return null;
    }

   
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Paper elevation={1} style={{background: 'transparent', color: 'white'}}>
 
              {
                startDisable ? (null) : (<h3 className="white-text padded">{mantra.name}</h3>)
              }

              {
                startDisable ? (null) : (<h3 className="white-text padded">{mantra.description}</h3>)
              }            
          </Paper>       
        </Grid>       
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <div>
          {
            startDisable ? (null) : (<button className="btn waves-effect" onClick={onStart} disabled={startDisable === true}>Start</button>)
          }
          </div>
          <br />
          <div> 
          {
            startDisable ? (null) : (
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.soundOn}
                    onChange={this.soundToggle}
                    value="soundOn"
                    color="primary"
                  />
                }
                label={<span style={{ color: 'white' }}>Sound</span>}
            />
            )
          }    
          </div>                       
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} />
        <Grid>
          <div>
            {
              startDisable ? (null) : (<Link to={`/mantras/${id}/edit`}><button className="btn waves-effect">Edit</button></Link>)
            }
          </div>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>

              <div style={{transition: 'all 2s ease-out', opacity: this.state.opacity, transform: `scale(${this.state.scale})`, marginTop: 150}}>
                             
                <h1 className="white-text">{mantra.lines ? mantra.lines[counter] : null}</h1>       
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
