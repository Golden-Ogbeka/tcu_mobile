import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ForumProfile from './ForumProfile';
import NewTopic from './NewTopic';
import ForumSections from './sections/ForumSections';
import ForumSectionStack from './sections/ForumSectionStack';

const Tab = createBottomTabNavigator();
export default function ForumHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sections" component={ForumSectionStack} />
      <Tab.Screen name="New Topic" component={NewTopic} />
      <Tab.Screen name="Profile" component={ForumProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
