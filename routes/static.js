'use strict';

module.exports = [

  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  },
  {
    method: 'GET',
    path: '/logout',
    handler: (req, reply) => console.log(reply)
  }

];
