import React from 'react';
import {Link} from 'react-router';

const Info = () => {
  return(
    <section>
    <header className='app-header'>
      <div className='logout-knop'><Link to='/logout'><i className='fa fa-remove' aria-hidden='true'></i></Link></div>
      <img className='app-logo' src='assets/svg/logo.svg' alt='Silent Schiedam' />
      <div className='app-header-illustratie'>
        <div className='molenbase molen-pos-one'>
          <img src='assets/svg/base.svg' alt='' className='molen-base-img' />
          <img src='assets/svg/draai.svg' alt='' className='molen-draai-img' />
        </div>
        <div className='molenbase molen-pos-two'>
          <img src='assets/svg/base.svg' alt='' className='molen-base-img' />
          <img src='assets/svg/draai.svg' alt='' className='molen-draai-img' />
        </div>
      </div>
      <img className='app-pand-overlay nav-overlay' src='assets/svg/pand-overlay.svg' alt='Deunen' />
    </header>
      <nav>
        <ul className='app-navbar'>
          <li className='app-nav-item'><Link to='/home'><i className='fa fa-home' aria-hidden='true'></i>Panden</Link>
          <div className='app-nav-active'></div>
          </li>
          <li className='app-nav-item'><Link to='/info'><i className='fa fa-info-circle' aria-hidden='true'></i>Informatie</Link>
          <div className='app-nav-active active'></div></li>
        </ul>
      </nav>
      <section className='app-page'>
        <article className='app-page-text'>
          <h2>Wat is Silent Schiedam?</h2>
          <p>
          Silent Schiedam is een <em>muzikale winkel-ervaring</em> in het hart van de stad Schiedam. Maak een muzikale reis door <em>de Hoogstraat</em> en ontdek leuke nieuwe winkelconcepten.
          </p>
          <h2>Wanneer?</h2>
          <p>Silent Schiedam is een <em>maandelijks evenement</em>, de volgende editie is op <em><strong>1 Juli 2016!</strong></em></p>
          <h2>Kan ik ook een pand hosten?</h2>
          <p>
          Wil jij je eigen stage hosten op de eerste editie van Silent Schiedam en daarmee bijdragen aan een unieke experience? Stuur dan een mail met jouw toffe idee&euml;n naar <em><a href='mailto:hosteenpand@silentschiedam.nl'>hosteenpand@silentschiedam.nl</a></em>
          </p>
        </article>
      </section>
    </section>
  );
};

export default Info;
