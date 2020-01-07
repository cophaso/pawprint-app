import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PupservationConfirm from './PupservationConfirm';

describe(`PupservationConfirm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders PupservationConfirm by default', () => {
    const wrapper = shallow(<PupservationConfirm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the PupservationConfirm given props', () => {
    const wrapper = shallow(<PupservationConfirm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
