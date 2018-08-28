import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const Home = () => {
  const num = Math.floor((Math.random() * 12) + 1);
  const image = `/images/${num}.jpg`;
  return (
    <Fragment>
    <Grid container spacing={16} className="white-text">
      <Grid item xs={12} style={{textAlign: 'center'}}>
        {/*<h5><i>"Better than a thousand hollow words, is one word that brings peace."</i></h5>*/}
        <h5>Mantra (Sanskrit: मन्त्र): "instrument of thought"</h5>
      </Grid>
      <Grid item xs={3} style={{textAlign: 'right'}}>
        
      </Grid>
      <Grid item xs={6} style={{textAlign: 'center'}}>
        <h5>Mandala (Sanskrit: मण्डल): "circle"</h5> 
        {/*<h5>- Gautama Buddha</h5>*/}
      </Grid>
      <Grid item xs={3} style={{textAlign: 'right'}}>
        
      </Grid>
    </Grid>
    <div className="container center-align" style={{marginTop: '80px'}}>
      {
        image ? (<img src={image} width={700} />) : (null)
      }
      
    </div>
    </Fragment>
  );
};

// const mapStateToProps = ({mantras}) => {

//   return {
//     mantras,
//     image
//   };
// };

// export default connect(mapStateToProps)(Home);
export default Home;
