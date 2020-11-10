import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/userAuth/Login';
import Register from './components/userAuth/Register';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer independent={true}>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              title: 'The Chicken Universe',
            }}
          />
          <Stack.Screen
            name="UserLogin"
            component={Login}
            options={{
              title: 'Login',
            }}
          />
          <Stack.Screen
            name="UserRegister"
            component={Register}
            options={{
              title: 'Register',
            }}
          />
        </Stack.Navigator>
       
        
    <NavigationContainer independent={true}>
       <Tab.Navigator>
          <Tab.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Tab.Screen name="UserLogin" component={Login} />
        </Tab.Navigator>
    </NavigationContainer>
      </SafeAreaView>
    </NavigationContainer>
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
