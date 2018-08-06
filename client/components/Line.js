import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';  //use <TransitionGroup>
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import { connect } from 'react-redux';

const Line = ({lineToShow}) => {
  return (
    <div>
      <h1>{lineToShow.text}</h1>
    </div>
  )
}

{/*const Line = ({lineToShow}) => {
  return (
    <div className="container">
      <h1>{lineToShow.text}</h1>
    </div>
  );
};*/}

export default Line;
