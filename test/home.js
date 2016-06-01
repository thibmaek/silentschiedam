import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {Home} from '../_js/pages/';
import {Panden, Pand} from '../_js/components/';

describe('<Home />', () => {
  it('renders the Pand wrapper <Panden />', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Panden)).to.have.length(1);
  });
});

describe('<Panden />', () => {
  it('renders a list of <Pand /> components', () => {
    const wrapper = shallow(<Pand />);
    expect(wrapper.find(Pand));
  });
});
