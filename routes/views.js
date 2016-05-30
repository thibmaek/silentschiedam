'use strict';

module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply.view('index', {
      name: 'Thibault Maekelbergh',
      title: '2DEV2_maekelberghThibault_MAIV'
    })
  }

];
