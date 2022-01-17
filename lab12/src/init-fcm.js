import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyCeI43NyDt88mrOJn3hXj7pR50sfhvsjM8",
  authDomain: "sec01-ce543.firebaseapp.com",
  projectId: "sec01-ce543",
  storageBucket: "sec01-ce543.appspot.com",
  messagingSenderId: "843914909395",
  appId: "1:843914909395:web:62fc75371320c0f18fe626",
  measurementId: "G-MBN72L62YE"
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
  "BGW1v-vSS35GHI8DMGzh21sDgzUPQRr8hWE0cxjEQPmj5HykZ9H7O8-C0fjr7JU_xew_YZ3K8N70vWe6WWGoc5s"
);

export { messaging };
