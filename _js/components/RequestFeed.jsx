import React, {PropTypes} from 'react';
import {Request} from '.';

import {Database} from '../config/firebase';

const pushRequest = () => {

};

const RequestFeed = ({requests}) => {
  return(
    <section className='app-page'>
      <input type='text' className='app-input-request' placeholder='Titel' />
      <input type='text' className='app-input-request' placeholder='Uitvoerder' />
      <input type='submit' className='app-request-submit' value='Verzend verzoek' onClick={() => pushRequest} />
      {requests.map(request => <Request key={request['.key']} {...request} />)}
    </section>
  );
};

RequestFeed.propTypes = {
  requests: PropTypes.array.isRequired
};

export default RequestFeed;