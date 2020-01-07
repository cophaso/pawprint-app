import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PupservationForm from './PupservationForm';

describe(`PupservationForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders PupservationForm by default', () => {
    const wrapper = shallow(<PupservationForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the PupservationForm given props', () => {
    const wrapper = shallow(<PupservationForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
