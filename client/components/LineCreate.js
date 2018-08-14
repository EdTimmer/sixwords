import React from 'react';

const LineCreate = ({onChange, onAddLine, line}) => {
  return (
    <div>
      <div>
        <p><input name="line" onChange={onChange} placeholder="line" />
        <button className="btn" value={ line } onClick={onAddLine}>Add Line</button></p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default LineCreate;
