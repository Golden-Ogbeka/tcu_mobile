import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

export default function ButtonComponent(props) {
  return (
    <Button
      titleStyle={{fontSize: 20}}
      raised
      buttonStyle={{
        backgroundColor: '#910000',
        height: 50,
        width: 200,
      }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({});
