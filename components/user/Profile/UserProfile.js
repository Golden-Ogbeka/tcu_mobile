import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImagePickerComponent from '../../layout/ImagePickerComponent';
import EditUserProfile from './EditUserProfile';
import ViewUserProfile from './ViewUserProfile';

const Stack = createStackNavigator();

export default function UserProfile() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="View User Profile" component={ViewUserProfile} />
      <Stack.Screen name="Edit User Profile" component={EditUserProfile} />
      {/* <Stack.Screen name="Change User Image" component={ImagePickerComponent} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
