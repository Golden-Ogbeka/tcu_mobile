import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color="#910000"
        size="large"
        style={styles.indicator}
      />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  indicator: {
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
  },
});
