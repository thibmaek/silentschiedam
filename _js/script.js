// some features need the be polyfilled..
// https://babeljs.io/docs/usage/polyfill/

// import 'babel-core/polyfill';
// or import specific polyfills
// import {$} from './helpers/util';
import ReactDOM from 'react-dom';
import router from './router/';

const init = () => {
  ReactDOM.render(router, document.querySelector('main'));
};

init();
