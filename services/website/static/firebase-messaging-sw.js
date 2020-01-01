// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("/__/firebase/7.6.0/firebase-app.js");
importScripts("/__/firebase/7.6.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "670130650384",
  projectId: "www-mikenikles-com",
  apiKey: "AIzaSyCjrFcIqw6Ojeb88Jjv8jv1mfb8Qrr2feM",
  appId: "1:670130650384:web:612fca2cffed412f013995"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});