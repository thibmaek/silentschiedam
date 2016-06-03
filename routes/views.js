'use strict';

module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => reply.view('index', {
      title: 'Silent Schiedam'
    })
  },
  {
    method: 'GET',
    path: '/login',
    handler: (req, reply) => reply.view('login', {
      title: 'Login'
    })
  },
  {
    method: 'GET',
    path: '/logout',
    handler: (req, reply) => reply.view('index')
  }

];
