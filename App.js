/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import useChecker from './src/hooks/useChecker';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export default function App() {
  const [input, setInput] = useState('');
  const isBalanced = useChecker(input);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Validate you code string here!</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={text => setInput(text)}
      />

      {!isBalanced && !!input && (
        <Text style={styles.textError}>The string is not balanced</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    marginTop: 20,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textError: {
    marginTop: 10,
    color: 'red',
  },
});
