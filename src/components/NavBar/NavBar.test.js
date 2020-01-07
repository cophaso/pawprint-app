import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from './NavBar';

describe(`NavBar component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders NavBar by default', () => {
    const wrapper = shallow(<NavBar />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the NavBar given props', () => {
    const wrapper = shallow(<NavBar {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
