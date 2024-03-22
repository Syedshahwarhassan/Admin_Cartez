
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAD4smPvh9O0UAdvWGIkPEeIzFPaEvRcWo",
  authDomain: "cartez-2c9d2.firebaseapp.com",
  databaseURL: "https://cartez-2c9d2-default-rtdb.firebaseio.com",
  projectId: "cartez-2c9d2",
  storageBucket: "cartez-2c9d2.appspot.com",
  messagingSenderId: "810306311019",
  appId: "1:810306311019:web:5a0574bdc172be564b322e",
  measurementId: "G-ZC3VEQ6DL0"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);