import React from 'react';
// import { connect } from 'react-redux';
import { Switch, FormControlLabel } from '@material-ui/core';

class SoundSwitch2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundOn: true
    }
    this.soundToggle = this.soundToggle.bind(this);
    this.soundFunction = this.soundFunction.bind(this);
  }
  soundToggle(ev) {
    ev.preventDefault();
    this.setState({soundOn: !this.state.soundOn});
  }
  soundFunction(ev) {
    ev.preventDefault();
    let audio = new Audio('/sounds/indianBell.wav');
    if (this.state.soundOn) {
      audio.play();
    }
  }
  render() {
    const { soundOn } = this.state;
    const { soundToggle } = this;
    const soundOnOffText = soundOn ? 'sound on' : 'sound off';
    const soundOpacity = soundOn ? (1) : (0.5);

    return (
      <div>
        {
          <FormControlLabel
              style={{opacity: soundOpacity}}
              control={
                <Switch
                  checked={soundOn}
                  onChange={soundToggle}
                  value="soundOn"
                  color="secondary"
                />
              }
              label={<span style={{ color: 'white', fontSize: 20 }}><p>{soundOnOffText}</p></span>}
          />
        }
      </div>
    );
  }
}

// export default connect(mapStateToProps)SoundSwitch2;
export default SoundSwitch2;
