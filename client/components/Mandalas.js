import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Mandalas = ({ mandalas }) => {
  return (
    <div className="container">
      <div>
        <h1 style={{color: "white"}}>Mandalas</h1>
      </div>
      <div style={{textAlign: 'center'}}>
        <Link to={`/mandalacreate`}><button className="btn transparent" style={{marginBottom: 50}}>Upload New Mandala</button></Link>
      </div>
      <div>
        {
          mandalas.map(mandala => {
            return (
              <div key={mandala.id}>
                <Link to={`mandalas/${mandala.id}`}><h5>{mandala.name}</h5></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ mandalas }) => {
  return {
    mandalas
  };
};

export default connect(mapStateToProps)(Mandalas);
