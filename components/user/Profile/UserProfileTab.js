import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ForumProfile from '../../forum/ForumProfile';
import ProducerProfile from '../../producer/ProducerProfile';
import UserProfile from './UserProfile';

const Tab = createBottomTabNavigator();

export default function UserProfileTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserProfile" component={UserProfile} />
      <Tab.Screen name="ProducerProfile" component={ProducerProfile} />
      <Tab.Screen name="ForumProfile" component={ForumProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
