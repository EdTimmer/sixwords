import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Mantras = ({ mantras }) => {
  return (
    <div className="container">
      <div>
        <h1 style={{color: "white"}}>Mantras</h1>
      </div>      
      <div style={{textAlign: 'center'}}>
        <Link to={`/mantracreate`}><button className="btn transparent btnGreyBorder" style={{marginBottom: 50}}>Create</button></Link>
      </div>
      <div>
        {
          mantras.map(mantra => {
            return (
              <div key={mantra.id}>
                <Link to={`mantras/${mantra.id}`}><h5>{mantra.name}</h5></Link>
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
