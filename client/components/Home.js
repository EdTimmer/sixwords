import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <Fragment>
    <Grid container spacing={16} className="white-text">
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <h5><i>"Better than a thousand hollow words, is one word that brings peace."</i></h5>
      </Grid>
      <Grid item xs={3} style={{textAlign: 'right'}}>
        
      </Grid>
      <Grid item xs={6} style={{textAlign: 'right'}}>
        <h5>- Gautama Buddha</h5>
      </Grid>
      <Grid item xs={3} style={{textAlign: 'right'}}>
        
      </Grid>
    </Grid>
    <div className="container center-align">
      <img src="/images/buddha-flowers.jpg" />
    </div>
    </Fragment>
  );
};

const mapStateToProps = ({mantras}) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Home);
