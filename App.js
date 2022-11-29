/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Validate you code string here!</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
