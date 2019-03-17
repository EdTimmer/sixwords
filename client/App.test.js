import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Mantra from './components/Mantra';
import { Provider } from 'react-redux';
import store from './store';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without error', () => {
  const wrapper = shallow(<Mantra store={store} />)
  // expect(wrapper).toBeTruthy();
  console.log(wrapper.debug());
});

