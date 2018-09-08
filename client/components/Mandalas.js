import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Footer from './Footer';

const Mandalas = ({ mandalas }) => {
  return (
    <Fragment>
      <Grid container spacing={16} className="white-text" justify="center">
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <h1 style={{color: "white"}}>Mandalas</h1>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Link to={`/mandalacreate`}><button className="btn transparent btnGreyBorder" style={{marginBottom: 50}}>Upload</button></Link>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'left', marginLeft: 50, marginRight: 50}}>
          {
            mandalas.map(mandala => {
              return (
                <div key={mandala.id}>
                  <Link to={`mandalas/${mandala.id}`}><h5>{mandala.name}</h5></Link>
                </div>
              );
            })
          }
        </Grid>
        <Grid item xs={12} className="footer">
          <Footer />
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = ({ mandalas }) => {
  return {
    mandalas
  };
};

export default connect(mapStateToProps)(Mandalas);
