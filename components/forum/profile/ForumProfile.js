import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditForumProfile from './EditForumProfile';
import ViewForumProfile from './ViewForumProfile';

const Stack = createStackNavigator();
export default function ForumProfile() {
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
        component={ViewForumProfile}
        name="View Forum Profile"
        options={{headerShown: false}}
      />
      <Stack.Screen component={EditForumProfile} name="Edit Forum Profile" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
