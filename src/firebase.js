import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyAW-cjyll7Zezp9qP9xs7cqMG3-ROhv99s",
    authDomain: "labsensor-e595c.firebaseapp.com",
    databaseURL: "https://labsensor-e595c.firebaseio.com",
    projectId: "labsensor-e595c",
    storageBucket: "labsensor-e595c.appspot.com",
    messagingSenderId: "642153836330"
};


firebase.initializeApp(config);
var $db = firebase.database()

var datosFluido = {};
var datosCaudal = {};





export default async function(){
    await $db.ref('datosFluido').once('value').then(function (value) {
        datosFluido = value.val()

    });
    await $db.ref('datosCaudal').once('value').then(function (value) {
        datosCaudal = value.val()
    });

    return {
        datosFluido: datosFluido,
        datosCaudal: datosCaudal
    }
}