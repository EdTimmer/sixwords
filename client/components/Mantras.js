import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Mantras = ({ mantras }) => {
  return (
    <div className="container">
      <h1 style={{color: "white"}}>Mantras</h1>
      <div>
        {
          mantras.map(mantra => {
            return (
              <div key={mantra.id}>
                <Link to={`mantras/${mantra.id}`}>{mantra.name}</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ mantras }) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Mantras);
