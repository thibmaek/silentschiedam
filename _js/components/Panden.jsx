import React, {PropTypes} from 'react';
import {Pand} from '.';

const Panden = ({panden}) => {
  return(
    <section className='app-page'>
    <div className='app-intro-top'>
        <h2>Ontdek &amp; luister</h2>
        <select className='app-select-filter' name='genre' id='genre'>
          <option value=''>Genre</option>
          <option value=''>Techno</option>
          <option value=''>Deep House</option>
        </select>
      </div>
      {panden.map(pand => <Pand key={pand['.key']} {...pand} />)}
    </section>
  );
};

Panden.propTypes = {
  panden: PropTypes.array.isRequired
};

export default Panden;
