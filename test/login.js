// import React from 'react';
// import {expect} from 'chai';
// import {shallow} from 'enzyme';
//
// import {Login} from '../_js/pages/';
//
// describe('<Login />', () => {
//
//   before(() => {
//     if(typeof window !== 'undefined') global = window;
//
//     const mockStorage = () => {
//       let storage = {'uid': 'uid'};
//       return {
//         setItem: (key, value) => {
//           storage[key] = value || '';
//         },
//         getItem: key => {
//           return storage[key];
//         },
//         removeItem: key => {
//           delete storage[key];
//         },
//         get length () {
//           return Object.keys(storage).length;
//         },
//         key: i => {
//           const keys = Object.keys(storage);
//           return keys[i] || null;
//         }
//       };
//     };
//
//     global['sessionStorage'] = mockStorage();
//   });
//
//   it('calls componentWillMount', () => {
//     const wrapper = shallow(<Login />);
//     expect(Login.prototype.componentWillMount.calledOnce).to.equal(true);
//   });
//
//   it('renders a button', () => {
//     const wrapper = shallow(<Login />);
//     expect(wrapper.find('button')).to.have.length(1);
//   });
// });
