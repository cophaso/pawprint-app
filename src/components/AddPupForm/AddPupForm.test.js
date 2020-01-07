import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddPupForm from './AddPupForm';

describe(`AddPupForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.AddPupForm by default', () => {
    const wrapper = shallow(<AddPupForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the AddPupForm given props', () => {
    const wrapper = shallow(<AddPupForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
