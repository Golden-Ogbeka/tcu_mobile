import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function WelcomeScreen(props) {
  return (
    <View style={styles.logoContainer}>
      <Image
        resizeMode="contain"
        source={require('../assets/logo/tcu.png')}
        style={styles.logoImage}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          title="Login"
          color="red"
          onPress={() => props.navigation.navigate('UserLogin')}
        />
        <Button
          title="Register"
          color="gold"
          onPress={() => props.navigation.navigate('UserRegister')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationStyle: 'solid',
  },
  logoImage: {
    width: '100%',
    height: 500,
  },
  logoContainer: {
    top: -100,
    flexGrow: 1,
  },
});