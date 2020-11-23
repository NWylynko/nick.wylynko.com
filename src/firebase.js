import * as firebase from 'firebase/app'

import "firebase/analytics"
import "firebase/performance"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2uiJp4yyGkWhWAJWBM5gJnrFYZVvriWA",
  authDomain: "wylynko-208cd.firebaseapp.com",
  databaseURL: "https://wylynko-208cd.firebaseio.com",
  projectId: "wylynko-208cd",
  storageBucket: "wylynko-208cd.appspot.com",
  messagingSenderId: "738874034279",
  appId: "1:738874034279:web:768bb33fdcbfac19e46cc2",
  measurementId: "G-CZGVC2G2LK"
};

firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const performance = firebase.performance()

export default firebase