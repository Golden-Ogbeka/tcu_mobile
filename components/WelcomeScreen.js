import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.logoContainer}>
      <Image
        resizeMode="contain"
        source={require('../assets/images/logo/tcu.png')}
        style={styles.logoImage}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title="Login"
          icon={<Icon raised name="sign-in" type="font-awesome" color="#f50" />}
          onPress={() => props.navigation.navigate('Login')}
          type="clear"
          titleStyle={{color: 'red', fontSize: 22}}
        />
        <Button
          title="Register"
          icon={<Icon raised name="user" type="font-awesome" color="#f50" />}
          onPress={() => props.navigation.navigate('Register')}
          type="clear"
          titleStyle={{color: 'red', fontSize: 22}}
        />
      </View>
    </SafeAreaView>
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
