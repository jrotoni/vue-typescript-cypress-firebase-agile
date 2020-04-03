import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCZ-i3j9pvCNlDjO3npHLvTNAqUZfUUvs0",
  authDomain: "agilemanifestovue.firebaseapp.com",
  databaseURL: "https://agilemanifestovue.firebaseio.com",
  projectId: "agilemanifestovue",
  storageBucket: "agilemanifestovue.appspot.com",
  messagingSenderId: "719406446253",
  appId: "1:719406446253:web:8dfdf1de3587c4870cf824",
  measurementId: "G-WBBWRNHWM1"
});

export const db = firebase.firestore();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
