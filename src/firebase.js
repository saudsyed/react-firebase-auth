import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD4fEs3dUwSIJ6T2now7W8Rdv-ySTjGN8o',
  authDomain: 'toast-notification.firebaseapp.com',
  projectId: 'toast-notification',
  storageBucket: 'toast-notification.appspot.com',
  messagingSenderId: '611054972219',
  appId: '1:611054972219:web:6cede62c254b65a663db1e',
  measurementId: 'G-1HBT1WKSWC',
});

export const auth = app.auth();
export default app;
