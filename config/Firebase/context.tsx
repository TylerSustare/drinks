// https://levelup.gitconnected.com/how-to-use-the-react-context-api-to-build-react-native-expo-and-firebase-apps-adda840e52b0
import React, { createContext } from 'react';

const FirebaseContext = createContext({});

export const FirebaseProvider = FirebaseContext.Provider;

export const FirebaseConsumer = FirebaseContext.Consumer;

export const withFirebaseHOC = Component => props => (
  <FirebaseConsumer>{state => <Component {...props} firebase={state} />}</FirebaseConsumer>
);
