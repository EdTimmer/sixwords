import React from 'react';
import { connect } from 'react-redux';

class Mandala extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      // startDisable: false,
      opacity: 1,
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
    const { mandala } = this.props;
    const { counter } = this.state;
    const { onStart } = this;
    console.log('counter is:', counter);
    
    if (!mandala ) {
      return null;
    }
    return (
      <div className="container center-align">
        <div className="row">
          <div className="s12 extrapadded">
            <h5 className="white-text padded">{mandala.name}</h5>
          </div>
        </div>
       
        <div className="row">
          <div>
            <div>
              {/*<div style={{transition: 'all 2s ease-out', opacity: this.state.opacity, transform: `scale(${this.state.scale})`}}>*/} 
              <p><br /></p>               
                <img src={mandala.imageURL} width={500} />
              {/*</div>*/}
            </div>
          </div>
        </div>
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
    mandala
  };
};

export default connect(mapStateToProps)(Mandala);
