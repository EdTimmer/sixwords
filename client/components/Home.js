import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <hr />
    </div>
  );
};

const mapStateToProps = ({mantras}) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Home);
