import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getLines, getMantras } from '../store';

import Nav from './Nav';
import Home from './Home';
import Mantras from './Mantras';
import Mantra from './Mantra';
import Lines from './Lines';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Route render={({location}) => <Nav path={location.pathname} />} />
            <div className="container-fluid">
              <Switch>
                <Route path="/mantras/:id" exact render={({match, history}) => <Mantra id={ match.params.id * 1 } history={ history } /> } />
                <Route path="/lines/:id" exact render={({match, history}) => <Line id={ match.params.id * 1 } history={ history } /> } />
                <Route exact path="/mantras" component={ Mantras } />
                {/*<Route exact path="/lines" component={ Lines } />*/}
                <Route exact path="/" component={ Home } />
              </Switch>
            </div>
        </div>
      </HashRouter>
    )
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  fetch() {
    dispatch(getMantras());
    dispatch(getLines());
  }
  // getUser(token) {
  //   dispatch(getUserFromToken(token));
  // },
  // getUsers() {
  //   dispatch(getUsers());
  // }
});

export default connect(mapState, mapDispatch)(Main);
