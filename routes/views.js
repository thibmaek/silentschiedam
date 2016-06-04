'use strict';

module.exports = [

  {
    method: 'GET',
    path: '/home',
    handler: (req, reply) => reply.view('index', {
      title: 'Silent Schiedam'
    })
  },
  {
    method: 'GET',
    path: '/login',
    handler: (req, reply) => reply.view('generic', {
      title: 'Login'
    })
  },
  {
    method: 'GET',
    path: '/detail/1',
    handler: (req, reply) => reply.view('detail', {
      title: 'Detail'
    })
  }

];
