import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AllGroups from './AllGroups';
import GroupsHome from './GroupsHome';
import NewGroup from './NewGroup';
import TrendingGroups from './TrendingGroups';
import UserGroups from './UserGroups';

const Tab = createBottomTabNavigator();

export default function GroupsTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GroupsHome} />
      <Tab.Screen name="Trending" component={TrendingGroups} />
      <Tab.Screen name="New Group" component={NewGroup} />
      <Tab.Screen name="Your Groups" component={UserGroups} />
      <Tab.Screen name="All Groups" component={AllGroups} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
