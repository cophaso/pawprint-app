import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginBar from './LoginBar';

describe(`LoginBar component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders LoginBar by default', () => {
    const wrapper = shallow(<LoginBar />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the LoginBar given props', () => {
    const wrapper = shallow(<LoginBar {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
