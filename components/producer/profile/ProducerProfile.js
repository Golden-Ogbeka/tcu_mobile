import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditProducerProfile from './EditProducerProfile';
import ViewProducerProfile from './ViewProducerProfile';

const Stack = createStackNavigator();
export default function ProducerProfile() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={ViewProducerProfile}
        name="View Producer Profile"
      />
      <Stack.Screen
        component={EditProducerProfile}
        name="Edit Producer Profile"
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
