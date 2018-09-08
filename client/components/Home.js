import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Footer from './Footer';

const Home = () => {
  const num = Math.floor((Math.random() * 12) + 1);
  const image = `/images/${num}.jpg`;
  return (
    <Fragment>
      <Grid container spacing={16} className="white-text" justify="center">
        <Grid item xs={12} style={{textAlign: 'center'}}>
          {/*<h5><i>"Better than a thousand hollow words, is one word that brings peace."</i></h5>*/}
          <h5>Mantra (Sanskrit: मन्त्र): "instrument of thought"</h5>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <h5>Mandala (Sanskrit: मण्डल): "circle"</h5>
        </Grid>
        <Grid item xs={12} style={{textAlign: 'center', marginTop: 70}}>
          {
            image ? (<img src={image} width={700} />) : (null)
          }
        </Grid>
        <Grid item xs={12} className="footer">
          <Footer />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
