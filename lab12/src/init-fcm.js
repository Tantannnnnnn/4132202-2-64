import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDWczeW-VMxjMuSZOotjSFRSglcClGSZZg",
  authDomain: "react-sec01-012.firebaseapp.com",
  projectId: "react-sec01-012",
  storageBucket: "react-sec01-012.appspot.com",
  messagingSenderId: "809609933640",
  appId: "1:809609933640:web:a78e90a441b4de644db97d"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BHgEPmTm3p6op2YB1ZtoXZZ2nB-R-gHVlGowzlUYqor6HA2-iQMGcRYI4prl2CujTQjtgdMUO4XfbjrOXqsB4ok"
);

export { messaging };
