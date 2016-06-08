import React from 'react';
import {Link} from 'react-router';

const Info = () => {
  return(
    <section>
    <header className='app-header'>
      <div className='logout-knop'><Link to='/logout'><i className='fa fa-sign-out' aria-hidden='true'></i></Link></div>
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
          Aan de basis van het platform ligt een uniek event dat wordt georganiseerd in heel de Hoogstraat. In elk leegstaand pand krijgt een lokale DJ en/of muziekliefhebber een podium. Zowel professionele DJs als beginners, of de opa die zijn jazz-platen wil komen spelen zijn allemaal welkom. Al die muziek-feeds worden verzameld op een app, waar iedereen kan op inpluggen via zijn mobieltje.
          </p>
          <h2>Kan ik ook een pand hosten?</h2>
          <p>
          We bieden winkeliers de kans aan om een podium te hosten. Concreet komt dit er op neer dat winkeliers en/of potenti&euml;le uitbaters een locatie kunnen vullen met DJs naar keuze en heel de inkleding mogen invullen naar eigen wens en branding. Dit zorgt ervoor dat winkeliers hun brand-experience kunnen uitbreiden met een muzikale noot en dat potenti&euml;le uitbaters een concept kunnen komen af toetsen aan een enthousiast publiek.
          </p>
        </article>
      </section>
    </section>
  );
};

export default Info;
