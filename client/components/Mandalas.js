import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Mandalas = ({ mandalas }) => {
  return (
    <div className="container">
      <h1>Mandalas</h1>
      <div>
        {
          mandalas.map(mandala => {
            return (
              <div key={mandala.id}>
                <Link to={`mandalas/${mandala.id}`}>{mandala.name}</Link>
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
