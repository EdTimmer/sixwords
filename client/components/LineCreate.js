import React from 'react';

const LineCreate = ({onChange, onAddLine, line}) => {
  return (
    <div>
      <div>
        <input name="line" onChange={onChange} placeholder="line" />
      </div>
      <div>
        <button className="btn" value={ line } onClick={onAddLine}>Add Line</button>
      </div>
    </div>
  );
};

export default LineCreate;
