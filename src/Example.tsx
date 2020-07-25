import React from 'react';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';
// import { Button } from 'react-native-elements';
import { withFirebaseHOC } from '../config/Firebase';

interface IExampleProps {
  firebase: {
    createNewUser: Function;
  };
}

const Thing: React.FunctionComponent<IExampleProps> = props => {
  const [name, setUser] = React.useState('');
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput value={name} onChangeText={setUser} testID="input" style={{ backgroundColor: '#fff' }} />

      <Button
        title="Print Username"
        onPress={async () => {
          setTimeout(() => {
            setShow(!show);
          }, Math.floor(Math.random() * 200));
          await props.firebase.createNewUser(name);
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withFirebaseHOC(Thing);
