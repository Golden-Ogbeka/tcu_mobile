import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavLayout from './components/layout/NavLayout';
import WelcomePage from './components/WelcomePage';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <WelcomePage />
        <NavLayout />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
});

export default App;
