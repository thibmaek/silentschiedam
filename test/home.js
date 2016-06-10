import React from 'react';

import {expect} from 'chai';
const jsdom = require('mocha-jsdom');
import {shallow} from 'enzyme';

import {Home} from '../_js/pages/';
import {Panden, Pand} from '../_js/components/';

describe('<Home />', () => {
  jsdom();
  it('renders the Pand wrapper <Panden />', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Panden)).to.have.length(1);
  });
});

describe('<Panden />', () => {
  jsdom();
  it('renders a list of <Pand /> components', () => {
    const wrapper = shallow(<Pand />);
    expect(wrapper.find(Pand));
  });
});
