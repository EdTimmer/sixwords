import React from 'react';
import { connect } from 'react-redux';
// import Line from './Line';

// const styles = {
//   transition: 'all 1s ease-out'
// };

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
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
    let that = this;
    if (that.state.counter > that.props.linesOfThisMantra.length) {
      that.setState({counter: 0})
    }
    let promise = new Promise(function(resolve, reject){    
      setTimeout(function() {
        that.setState({opacity: 1, scale: 1.2});
        resolve({});
      }, 1000);
    });
    return promise;
 }  
  
  fadeOut(res) {
    let that = this;
    let promise = new Promise(function(resolve, reject){
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
    const playAll = () => {
      this.fadeIn()      
      .then(this.fadeOut)      
      .then(this.pause)
      // .then(() => this.setState({scale: 1}))
      .then(() => {
        if (this.state.counter < this.props.linesOfThisMantra.length) {
          this.setState({counter: this.state.counter + 1});
          playAll();
        }
        else {
          this.setState({counter: 1, startDisable: false})
          return null;
        }
      })
    }
    playAll();
  }

  render() {
    const { mantra, linesOfThisMantra } = this.props;
    const { counter } = this.state;
    const { onStart } = this;
    console.log('counter is:', counter);
    let lineToShow = linesOfThisMantra.find(line => line.sequence === counter);
      
    if (!mantra || !linesOfThisMantra || !lineToShow) {
      return null;
    }
    return (
      <div className="container center-align">
        <div className="row">
          <div className="s12">
            <h4><u>{mantra.name}</u></h4>
          </div>
        </div>
        <div className="row">
          <div className="s8 offset-s2 center-align">
            <div className="card z-depth-2" >
              <div className="card-content" style={{transition: 'all 2s ease-out', opacity: this.state.opacity, transform: `scale(${this.state.scale})`}}>
                <h1>{lineToShow.text}</h1>
              </div>
      
            </div>
          </div>
        </div>
        <div>
          <button onClick={onStart} disabled={this.state.startDisable === true}>Start</button>
        </div>
        <p></p>
        <div>
          <img align="center" src={mantra.image} height={400} />
        </div>
       
      </div>
    )
  }
}

const mapStateToProps = ({ mantras, lines }, { id }) => {
  const mantra = mantras.find(mantra => mantra.id === id);
  const linesOfThisMantra = lines.filter( line => line.mantraId === mantra.id);
  return {
    mantra,
    linesOfThisMantra
  };
};

export default connect(mapStateToProps)(Mantra);
