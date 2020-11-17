import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import AllGroups from './AllGroups';
import NewGroup from './NewGroup';
import TrendingGroups from './TrendingGroups';
import UserGroups from './UserGroups';

const Tab = createBottomTabNavigator();

export default function GroupsTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 70,
        },
        activeTintColor: '#910000',
        inactiveTintColor: 'gray',
        // showLabel: false,
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Your Groups"
        component={UserGroups}
        options={{
          tabBarIcon: () => <Icon name="group" type="font-awesome" size={40} />,
        }}
      />
      <Tab.Screen
        name="Trending"
        component={TrendingGroups}
        options={{
          tabBarIcon: () => <Icon name="trending-up" size={40} />,
        }}
      />
      <Tab.Screen
        name="New Group"
        component={NewGroup}
        options={{
          tabBarIcon: () => <Icon name="plus" type="font-awesome" size={40} />,
        }}
      />
      <Tab.Screen
        name="All Groups"
        component={AllGroups}
        options={{
          tabBarIcon: () => <Icon name="list" type="font-awesome" size={40} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
