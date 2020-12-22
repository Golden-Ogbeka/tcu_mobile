import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ViewTopic from './layout/ViewTopic';
import ViewWriter from './layout/ViewWriter';

const Stack = createStackNavigator();
export default function TopicStack() {
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
        name="View Topic"
        component={ViewTopic}
        options={{title: 'Topic Details'}}
      />
      <Stack.Screen
        name="View Writer"
        component={ViewWriter}
        options={{title: 'Writer Details'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
