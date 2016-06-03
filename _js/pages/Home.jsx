import React from 'react';
import {Panden} from '../components/';

const Home = () => {
  return (
    <section>
      <nav>
        <ul className='app-navbar'>
          <li className='app-nav-item'><a href='#'><i className='fa fa-home' aria-hidden='true'></i>Panden</a>
          <div className='app-nav-active active'></div>
          </li>
          <li className='app-nav-item'><a href='/info'><i className='fa fa-info-circle' aria-hidden='true'></i>Informatie</a>
          <div className='app-nav-active'></div></li>
        </ul>
      </nav>
      <Panden />
    </section>
  );
};

export default Home;
