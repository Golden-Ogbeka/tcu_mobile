import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function NavLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Products" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Forum" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Groups" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Profile" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: 'silver',
    borderWidth: 3,
  },
  buttonContainer: {
    width: '100%',
    flexShrink: 1,
  },
});
