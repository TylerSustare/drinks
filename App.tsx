import React from 'react';
import Thing from './src/Example';
import Firebase, { FirebaseProvider } from './config/Firebase';

export default () => {
  return (
    <FirebaseProvider value={Firebase}>
      <Thing />
    </FirebaseProvider>
  );
};

// export default App;
