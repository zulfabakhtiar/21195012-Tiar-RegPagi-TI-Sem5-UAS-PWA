importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js');
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts('https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const config = {
  apiKey: "AIzaSyDWuc88o2G1Ke29MUamQwg7raiXUriPkf8",
  authDomain: "cvpwa-9b47d.firebaseapp.com",
  projectId: "cvpwa-9b47d",
  storageBucket: "cvpwa-9b47d.appspot.com",
  messagingSenderId: "46924364240",
  appId: "1:46924364240:web:1a1109bcf3fe09386c61d5",
  measurementId: "G-PCDQ66WPED"
  };

firebase.initializeApp({
  messagingSenderId: '46924364240'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});