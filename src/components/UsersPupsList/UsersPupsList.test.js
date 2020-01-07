import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UsersPupsList from './UsersPupsList';

describe(`UsersPupsList component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders UsersPupsList by default', () => {
    const wrapper = shallow(<UsersPupsList />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the UsersPupsList given props', () => {
    const wrapper = shallow(<UsersPupsList {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
