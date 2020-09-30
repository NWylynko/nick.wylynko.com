import * as firebase from 'firebase/app'

import "firebase/analytics"
import "firebase/performance"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyScInXe0Dj5LLJg6XN7JjE3LwsQnIvUU",
  authDomain: "wylynko-com.firebaseapp.com",
  databaseURL: "https://wylynko-com.firebaseio.com",
  projectId: "wylynko-com",
  storageBucket: "wylynko-com.appspot.com",
  messagingSenderId: "572048073800",
  appId: "1:572048073800:web:5681d1f96042ceac6e647d",
  measurementId: "G-42MLYP4551"
};

firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const performance = firebase.performance()

export default firebase