import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Line from './Line';
import { CSSTransition } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import CSSTransitionGroup from '../../react-transition-group/src/CSSTransition';

const styles = {
  transition: 'all 1s ease-out'
};

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      on: false,
      opacity: 0,
      scale: 1
    }
    // this.onStart = this.onStart.bind(this);
    this.onStartTwo = this.onStartTwo.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onShow = this.onShow.bind(this);
    // this.onScale = this.onScela.bind(this);
  }

  onHide() {
    this.setState({
      opacity: 0,
      scale: 1
    })
  }

  // onScale() {
  //   this.setState({
  //     scale: this.state.scale > 1 ? 1 : 1.3
  //   })
  // }

  onShow() {
    this.setState({
      opacity: 1,
      scale: 1.2
    })
  }
  // onStart(ev) {
  //   ev.preventDefault();
  //   this.setState({counter: 1, on: true});
  //   setInterval(function() {
  //     if (this.state.counter < this.props.linesOfThisMantra.length && this.state.on === true) {
  //       this.setState({ counter: this.state.counter + 1});
  //     }
  //     else {
  //       this.setState({counter: 0, on: false});
  //     }
  //   }.bind(this), 3000);
  // }
 
  onStartTwo(ev) {
    console.log('onShow is:', this.onShow)
    ev.preventDefault();
    // this.setState({counter: 1, on: true});
    this.setState({
      opacity: 1,
      scale: 1.2
    })
    let first = function() {

      // this.onShow();
      setTimeout(function() {
        this.setState({
          opacity: 0,
          scale: 1
        })
      }.bind(this), 3000);
      
      
    }.bind(this);
    first()
    // let second = function() {
    //   // this.onHide();
    //   this.setState({
    //     opacity: 0,
    //     scale: 1
    //   })
    //   return second;
    // }.bind(this);
    // return first().then(() => this.setState({opacity: 0, scale: 1}))
      // .then(second());
    
    
    
    
    
      // .then(() => this.onHide());
    // this.onHide();
    // setInterval(function() {
    //   if (this.state.counter < this.props.linesOfThisMantra.length && this.state.on === true) {
    //     this.setState({ counter: this.state.counter + 1});
    //   }
    //   else {
    //     this.setState({counter: 0, on: false});
    //   }
    // }.bind(this), 3000);
    // this.onShow();
      // .then(() => setTimeout(function() {
      //   alert('testing')
      // }.bind(this), 2000))
      // .then(() => this.onHide())
    // this.onHide();
    
  }

  render() {
    const { mantra, linesOfThisMantra } = this.props;
    const { counter } = this.state;
    const { onStart, onStartTwo, onShow, onHide } = this;
    console.log('counter is:', counter);
    let lineToShow = linesOfThisMantra.find(line => line.sequence === counter);
      
    if (!mantra || !linesOfThisMantra) {
      return null;
    }
    return (
      <div className="conatiner" align="center">

        <h3>{mantra.name}</h3>
        <br />
        {/*<div>
          {
            counter > 0 ? (<Line lineToShow={lineToShow} />) : (null)
          }
        </div>*/}
        {/*<div>
          {
            counter > 0 ? (<Line linesOfThisMantra={linesOfThisMantra} />) : (null)
          }
        </div>*/}
        
        <div className="s8 offset-s2 center-align">
          <div className="card deep-blue z-depth-2" style={{transition: 'all 2s ease-out', opacity: this.state.opacity, transform: `scale(${this.state.scale})`}}>
            
              <Line />
          <div className="card-action">
            
          </div>
            
          </div>
        </div>
        <button onClick={onStartTwo}>Start</button>
        
            <br />
        <a onClick={this.onShow.bind(this)} style={{cursor: 'pointer'}}>SHOW</a>
          <br />
        <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>HIDE</a>
        <p><br /></p>
        <img align="center" src={mantra.image} height={600} />
       
      </div>
    )
  }
}

const mapStateToProps = ({ mantras, lines }, { id }) => {
  const mantra = mantras.find(mantra => mantra.id === id);
  const linesOfThisMantra = lines.filter( line => line.mantraId === mantra.id);
  // console.log('linesOfThisMantra at index 0', linesOfThisMantra[0]);

  return {
    mantra,
    linesOfThisMantra
  };
};

export default connect(mapStateToProps)(Mantra);
