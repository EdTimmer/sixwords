import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const LineCreate = ({onChange, onAddLine, line}) => {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <input name="line" onChange={onChange} placeholder="line" />
        <Button variant="fab" color="primary" aria-label="Add" value={ line } onClick={onAddLine}>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};

export default LineCreate;
