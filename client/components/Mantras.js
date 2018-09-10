import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Footer from './Footer';

const Mantras = ({ mantras }) => {
  return (
    <Fragment>
      <Grid container spacing={16} className="white-text" justify="center">
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <h1 style={{color: 'white'}}>Mantras</h1>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <Link to={`/mantracreate`}><button className="btn transparent btnGreyBorder">Create</button></Link>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'left', marginLeft: 50, marginRight: 50}}>
          {
            mantras.map(mantra => {
              return (
                <div key={mantra.id}>
                  <Link to={`mantras/${mantra.id}`}><h5>{mantra.name}</h5></Link>
                </div>
              );
            })
          }
        </Grid>
        {/*<Grid item xs={12} className="footer">
          <Footer />
        </Grid>*/}
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = ({ mantras }) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Mantras);
