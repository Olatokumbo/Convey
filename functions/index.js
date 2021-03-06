const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
      .add(notification)
      .then(doc => console.log('notification added', doc));
  });

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
      const user = doc.data();
      const notification ={
          content: "added a new Project",
          time: admin.firestore.FieldValue.serverTimestamp(),
          user: user.displayName
      }
      return createNotification(notification);
  });

  exports.userJoined = functions.auth.user()
  .onCreate(user => {
      const notification = {
        content: 'joined the party',
        user: user.email,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
});