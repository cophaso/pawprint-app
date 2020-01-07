import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from './Menu';

describe(`Menu component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders Menu by default', () => {
    const wrapper = shallow(<Menu />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the Menu given props', () => {
    const wrapper = shallow(<Menu {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
