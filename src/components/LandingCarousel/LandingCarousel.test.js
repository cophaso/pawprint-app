import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingCarousel from './LandingCarousel';

describe(`LandingCarousel component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  };

  it('renders a form.LandingCarousel by default', () => {
    const wrapper = shallow(<LandingCarousel />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the LandingCarousel given props', () => {
    const wrapper = shallow(<LandingCarousel {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
