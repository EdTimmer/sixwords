import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="container">
      <img align="center" src="/images/Kangchenjunga.jpg" />
    </div>
  );
};

const mapStateToProps = ({mantras}) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Home);
