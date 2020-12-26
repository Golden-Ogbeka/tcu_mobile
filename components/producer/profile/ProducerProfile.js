import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChangeDateComponent from '../../layout/ChangeDateComponent';
import EditProducerProfile from './EditProducerProfile';
import ViewProducerProfile from './ViewProducerProfile';

const Stack = createStackNavigator();
export default function ProducerProfile() {
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
        component={ViewProducerProfile}
        name="View Producer Profile"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={EditProducerProfile}
        name="Edit Producer Profile"
      />
      <Stack.Screen component={ChangeDateComponent} name="Change Date" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
