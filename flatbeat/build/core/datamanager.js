// тут будет класс для работы с firebase
// он прослойка между базой данной и интерфейсом
let firebase = require('firebase');

// Initialize Firebase
const CONFIG = {
  apiKey: "AIzaSyCz-2RuKex-3zvmg5q35XhUOy1PxmJmjHA",
  authDomain: "flatbeat-43ad7.firebaseapp.com",
  databaseURL: "https://flatbeat-43ad7.firebaseio.com",
  storageBucket: "flatbeat-43ad7.appspot.com",
  messagingSenderId: "50296543764"
};

class FlatbeatDataManager {
  constructor() {
    // let today = new Date();

    // делаем запрос на тек месяц к серверу
    // let query = {get: () => {}};

    // query.get({url: `#${today.getMonth() + 1}-${today.getFullYear()}`});
    // this.app = firebase.initializeApp(CONFIG);

    // firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
    //   let databaseRef = firebase.database().ref('data/settings/08-2016');
    //
    //   databaseRef.on('value', function(snapshot) {
    //     console.log(snapshot.val());
    //   });
    // });
  }
}

module.exports = FlatbeatDataManager;
