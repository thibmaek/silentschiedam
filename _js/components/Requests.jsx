import React, {PropTypes} from 'react';
import {Request} from '.';

const Requests = ({requests}) => {
  return(
    <section className='app-page'>
      <input type='text' className='app-input-request' placeholder='Titel' />
      <input type='text' className='app-input-request' placeholder='Uitvoerder' />
      <input type='submit' className='app-request-submit' value='Verzend verzoek' />
      {requests.map(request => <Request key={request['.key']} {...request} />)}
    </section>
  );
};

Requests.propTypes = {
  requests: PropTypes.array.isRequired
};

export default Requests;
