import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getMantras, getMandalas } from '../store';

import Nav from './Nav';
// import Nav2 from './Nav2';
// import Nav3 from './Nav3';
// import Nav4 from './Nav4';
// import Nav5 from './Nav5';
import Home from './Home';
import Mantras from './Mantras';
import Mantra from './Mantra';
import Mandala from './Mandala';
import MantraCreate from './MantraCreate';
import MandalaCreate from './MandalaCreate';
import FloatingActionButtons from './FloatingActionButtons';
// import TemporaryDrawer from './TemporaryDrawer';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    
    return (
      <HashRouter>
        <div>
          <Route render={({location}) => <Nav path={location.pathname} />} />
          {/*<Route render={({location}) => <Nav2 path={location.pathname} />} />*/}
            <div className="container-fluid">
              <Switch>
                <Route path="/mantracreate" exact render={({history}) => <MantraCreate history={history} /> } />
                <Route path="/mandalacreate" exact render={({history}) => <MandalaCreate history={history} /> } />
                <Route path="/mantras/:id" exact render={({match, history}) => <Mantra id={ match.params.id * 1 } history={ history } /> } />
                <Route path="/mandalas/:id" exact render={({match, history}) => <Mandala id={ match.params.id * 1 } history={ history } /> } />
                <Route path="/lines/:id" exact render={({match, history}) => <Line id={ match.params.id * 1 } history={ history } /> } />
                <Route exact path="/mantras" component={ Mantras } />
                <Route exact path="/buttons" component={ FloatingActionButtons } />
                {/*<Route exact path="/drawers" component={ TemporaryDrawer } />*/}
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
    dispatch(getMandalas());
  }
  // getUser(token) {
  //   dispatch(getUserFromToken(token));
  // },
  // getUsers() {
  //   dispatch(getUsers());
  // }
});

export default connect(mapState, mapDispatch)(Main);
