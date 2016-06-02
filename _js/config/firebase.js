import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD81KfPLZ57NcbUTDI6sZdcaJwM7F8H4JI',
  authDomain: 'silentschiedam.firebaseapp.com',
  databaseURL: 'https://silentschiedam.firebaseio.com',
  storageBucket: 'silentschiedam.appspot.com ',
  serviceAccount: './_js/config/key.json'
};

Firebase.initializeApp(config);

const Database = Firebase.database();
const Auth = Firebase.auth();
const Storage = Firebase.storage().ref;

const Livestreams = Storage.child('livestreams');

export {
	Auth,
	Database,
  Livestreams,
  Storage
};
