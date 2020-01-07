import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PupservationBar from './PupservationBar';

describe(`PupservationBar component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders PupservationBar by default', () => {
    const wrapper = shallow(<PupservationBar />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the PupservationBar given props', () => {
    const wrapper = shallow(<PupservationBar {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
