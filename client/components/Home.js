import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="container center-align">
      <p></p>
      <p></p>
      <img src="/images/Kangchenjunga.jpg" />
    </div>
  );
};

const mapStateToProps = ({mantras}) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Home);
