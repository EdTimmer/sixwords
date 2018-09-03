import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Mandalas = ({ mandalas }) => {
  return (
    <div className="container">
      <h1 style={{color: "white"}}>Mandalas</h1>
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
