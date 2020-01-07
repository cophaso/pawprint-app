import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupForm from './SignupForm';

describe(`SignupForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders SignupForm by default', () => {
    const wrapper = shallow(<SignupForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the SignupForm given props', () => {
    const wrapper = shallow(<SignupForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
