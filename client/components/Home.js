import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div className="container center-align">
      <h5 className="white-text">"Better than a thousand hollow words, is one word that brings peace."<br />-Gautama Buddha</h5>
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
