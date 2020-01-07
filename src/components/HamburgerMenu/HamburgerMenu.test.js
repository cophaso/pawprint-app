import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HamburgerMenu from './HamburgerMenu';

describe(`HamburgerMenu component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.HamburgerMenu by default', () => {
    const wrapper = shallow(<HamburgerMenu />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the HamburgerMenu given props', () => {
    const wrapper = shallow(<HamburgerMenu {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
