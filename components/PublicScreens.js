import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import Login from './userAuth/Login';
import Register from './userAuth/Register';

const PublicScreensStack = createStackNavigator();
const PublicScreens = () => {
  return (
    <PublicScreensStack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <PublicScreensStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{title: 'Home'}}
      />
      <PublicScreensStack.Screen
        name="UserLogin"
        component={Login}
        options={{title: 'Login'}}
      />
      <PublicScreensStack.Screen
        name="UserRegister"
        component={Register}
        options={{title: 'Register'}}
      />
    </PublicScreensStack.Navigator>
  );
};

export default PublicScreens;
