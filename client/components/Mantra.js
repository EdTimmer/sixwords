import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class Mantra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.onStart = this.onStart.bind(this);
  }
  onStart(ev) {
    ev.preventDefault();
    this.setState({counter: 0});
    setInterval(function() {
      if (this.state.counter < this.props.linesOfThisMantra.length) {
        this.setState({ counter: this.state.counter + 1});
      }
    }.bind(this), 3000);
  }

  render() {
    const { mantra, linesOfThisMantra } = this.props;
    const { counter } = this.state;
    const { onStart } = this;
    console.log('counter is:', counter);
    let lineToShow = linesOfThisMantra.find(line => line.sequence === counter);
      
    if (!mantra || !linesOfThisMantra) {
      return null;
    }
    return (
      <div className="conatiner">
        <h3>{mantra.name}</h3>
        <div>
          {
            counter > 0 ? (lineToShow.text) : (null)
          }
        </div>
        <br />
        <button onClick={onStart}>Start</button>
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
