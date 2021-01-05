import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SendMessage from './SendMessage';
import ViewMessages from './ViewMessages';

const Stack = createStackNavigator();
export default function MessageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#910000',
        },
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        component={ViewMessages}
        name="View Messages"
        options={{headerShown: false}}
      />
      <Stack.Screen component={SendMessage} name="Send Message" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
