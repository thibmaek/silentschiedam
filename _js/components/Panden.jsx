import React, {PropTypes} from 'react';
import {Pand} from '.';

const Panden = ({panden}) => {
  return(
    <section className='app-page'>
      <select className='app-select-filter' name='genre' id='genre'>
        <option value=''>Filter op genre</option>
        <option value='techno'>Techno</option>
        <option value='deephouse'>Deep House</option>
      </select>
      {panden.map(pand => <Pand key={pand['.key']} {...pand} />)}
    </section>
  );
};

Panden.propTypes = {
  panden: PropTypes.array.isRequired
};

export default Panden;
