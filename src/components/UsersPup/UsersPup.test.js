import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UsersPup from './UsersPup';

describe(`UsersPup component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders UsersPup by default', () => {
    const wrapper = shallow(<UsersPup />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the UsersPup given props', () => {
    const wrapper = shallow(<UsersPup {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
