import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';

export default function InputComponent(props) {
  return (
    <Input
      errorMessage={props.touched && props.errors && props.errors}
      errorStyle={styles.errorText}
      style={styles.textInput}
      labelStyle={styles.textLabel}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 20,
  },
  textInput: {
    fontSize: 23,
  },
  textLabel: {
    color: '#910000',
    fontSize: 25,
  },
});
