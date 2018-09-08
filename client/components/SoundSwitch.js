import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';

const SoundSwitch = ({soundToggle, soundOn}) => {
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

export default SoundSwitch;
