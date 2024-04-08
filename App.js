import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input} />
        <Button title='ADD' />
      </View>
      <View>

      </View>
    </View>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})
