import React from 'react';
import Thing from './src/Example';
import Firebase, { FirebaseProvider } from './config/Firebase';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

export default () => {
  return (
    <FirebaseProvider value={Firebase}>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <Thing />
        </SafeAreaView>
      </ThemeProvider>
    </FirebaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
