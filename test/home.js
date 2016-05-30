import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Home from '../_js/pages/Home';

describe('<Home />', () => {
  it('renders a section', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('section')).to.have.length(1);
  });
});
