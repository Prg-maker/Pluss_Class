import firebase  from "firebase/app"

import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCmh7A510OzW9zbCHmf9zBASeAxRqygQGk",
  authDomain: "teste-7c329.firebaseapp.com",
  projectId: "teste-7c329",
  storageBucket: "teste-7c329.appspot.com",
  messagingSenderId: "903133831150",
  appId: "1:903133831150:web:042e39e4c7033ec33878ff"
};




firebase.initializeApp(firebaseConfig)

export { firebase }
