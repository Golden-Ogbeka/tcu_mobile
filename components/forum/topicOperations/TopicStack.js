import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditTopic from './EditTopic';
import ViewTopic from './ViewTopic';
import ViewWriter from './ViewWriter';

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
      <Stack.Screen name="Edit Topic" component={EditTopic} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
