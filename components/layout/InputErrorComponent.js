import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

export default function InputErrorComponent(props) {
  return (
    <View style={{alignItems: 'center'}}>
      {props.touched && props.errors && (
        <Text style={styles.errorText}>{props.errors}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 20,
  },
});
