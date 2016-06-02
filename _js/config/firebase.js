import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD81KfPLZ57NcbUTDI6sZdcaJwM7F8H4JI',
  authDomain: 'silentschiedam.firebaseapp.com',
  databaseURL: 'silentschiedam.firebaseio.com'
};

Firebase.initializeApp(config);

const Database = Firebase.database();
const Auth = Firebase.auth();

export {
	Auth,
	Database
};
