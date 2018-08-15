import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      startDisable: false,
      opacity: 0,
      scale: 1
    }
    this.onStart = this.onStart.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.pause = this.pause.bind(this);
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

  onStart(ev) {
    ev.preventDefault();
    this.setState({startDisable: true});
    let audio = new Audio('/sounds/indianBell.wav');
    audio.play()
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
    const { mantra } = this.props;
    const { counter, startDisable } = this.state;
    const { onStart } = this;
    console.log('counter is:', counter);
    
    if (!mantra ) {
      return null;
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <div className="row">
          <div className="s12 extrapadded">
            {
              startDisable ? (null) : (<h5 className="white-text padded">{mantra.name}</h5>)
            }
            {/*<h6 className="white-text padded">{mantra.name}</h6>*/}
          </div>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div className="row">
          <div className="s12">
            {
              startDisable ? (null) : (<h5 className="white-text padded">{mantra.description}</h5>)
            }
            
          </div>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div>
            {
              startDisable ? (null) : (<button className="btn waves-effect green darken-4" onClick={onStart} disabled={startDisable === true}>Start</button>)
            }
                    
        </div>
        </Grid>
        <Grid item xs={12}>
        <div className="row">
          <div>
            <div>
              <div style={{transition: 'all 2s ease-out', opacity: this.state.opacity, transform: `scale(${this.state.scale})`}}> 
              <p><br /></p>               
                <h1 className="white-text">{mantra.lines ? mantra.lines[counter] : null}</h1>       
              </div>
            </div>
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
    mantra
  };
};

export default connect(mapStateToProps)(Mantra);
