// https://levelup.gitconnected.com/how-to-use-the-react-context-api-to-build-react-native-expo-and-firebase-apps-adda840e52b0
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = {
  // auth
  loginWithEmail: (email: string, password: string): Promise<firebase.auth.UserCredential> =>
    firebase.auth().signInWithEmailAndPassword(email, password),

  signupWithEmail: (email: string, password: string): Promise<firebase.auth.UserCredential> =>
    firebase.auth().createUserWithEmailAndPassword(email, password),

  signOut: (): Promise<void> => firebase.auth().signOut(),

  checkUserAuth: user => firebase.auth().onAuthStateChanged(user),

  // firestore
  createNewUser: (name: string): Promise<void> => {
    return firebase
      .firestore()
      .collection('users')
      .doc(name)
      .set({ name });
  },

  getNewUser: (name: string) =>
    firebase
      .firestore()
      .collection('users')
      .doc(name)
      .get()
};

export default Firebase;
