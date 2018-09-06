import React from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';

const SoundSwitch = ({soundOpacity, soundOn, soundOnOffText, soundToggle}) => {
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
                color="primary"
              />
            }
            label={<span style={{ color: 'white', fontSize: 20 }}><p>{soundOnOffText}</p></span>}
        />
      }
    </div>
  );
};

export default SoundSwitch;
