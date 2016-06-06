'use strict';

require('dotenv').load({silent: true});

let Hapi = require('hapi');
let path = require('path');

let port = process.env.PORT || 3000;

let server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public')
      },
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  }
});

server.connection({port: port});

const pluginHandler = err => {
  if(err) console.error(err);
};

server.register(require('inert'), pluginHandler);
server.register(require('vision'), pluginHandler);

server.register({
  register: require('yar'),
  options: {
    storeBlank: false,
    cookieOptions: {
      password: 'kg9vef5x9dqlje5tblz0k9',
      isSecure: false
    }
  }
}, pluginHandler);
server.register(require('./plugins/'), pluginHandler);
server.register(require('./routes/'), pluginHandler);

server.start(err => {
  if(err) console.error(err);
  console.log(`Server running at: http://localhost:${port}`);
});
