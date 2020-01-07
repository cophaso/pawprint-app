import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Logo from './Logo';

describe(`Logo component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders Logo by default', () => {
    const wrapper = shallow(<Logo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the Logo given props', () => {
    const wrapper = shallow(<Logo {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
