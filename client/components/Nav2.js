import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon, NavItem } from 'react-materialize';

class Nav2 extends React.Component {
  
  render() {
    const { mantras } = this.props;
    return (
      <div>
        <nav>
          <div className="nav-wrapper light-green darken-4">
            <a href="#" className="brand-logo right">Six Words</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="" className="dropdown-button" data-activates="dropdown1">account<i className="material-icons right">arrow_drop_down</i></a></li>
                <ul id="dropdown1" className="dropdown-content">
                  <li><a href="#!">one</a></li>
                  <li><a href="#!">two</a></li>
                </ul>
              <li><a href="" className="dropdown-button" data-activates="dropdown2" data-constrainwidth="false">mantras<i className="material-icons right">arrow_drop_down</i></a></li>
                <ul id="dropdown2" className="dropdown-content">
                {
                  mantras.map(mantra => {
                    return (
                      <li key={mantra.id}>
                        <a href={`/#/mantras/${mantra.id}`}>{mantra.name}</a>
                      </li>
                    )
                  })
                }               
                </ul>
              {/*<li><a href="/#/mantras">mantras</a></li>*/}
            </ul>
            <Dropdown trigger={
              <a href="" className="dropdown-button" data-activates="dropdown1">account<Icon className="material-icons right">arrow_drop_down</Icon></a>
            }>
            <NavItem>one</NavItem>
            <NavItem>two</NavItem>
            <NavItem divider />
            <NavItem>three</NavItem>
          </Dropdown>
          </div>
        </nav>
      </div>
    );
  }
  
}
// const Nav = ({ mantras }) => {
  
// };

const mapStateToProps = ({ mantras }) => {
  return {
    mantras
  };
};

export default connect(mapStateToProps)(Nav2);
