import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color="#910000"
        size="large"
        style={styles.indicator}
      />
      <Text h3>Loading...</Text>
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
});
