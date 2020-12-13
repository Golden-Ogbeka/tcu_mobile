import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import ForumProfile from '../../forum/profile/ForumProfile';
import ProducerProfile from '../../producer/profile/ProducerProfile';
import UserProfile from './UserProfile';

const Tab = createBottomTabNavigator();

export default function UserProfileTab() {
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
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'User Profile',
          tabBarIcon: () => (
            <Icon name="user" type="font-awesome-5" size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="ProducerProfile"
        component={ProducerProfile}
        options={{
          title: 'Producer Profile',
          tabBarIcon: () => <Icon name="attach-money" size={40} />,
        }}
      />
      <Tab.Screen
        name="ForumProfile"
        component={ForumProfile}
        options={{
          title: 'Forum Profile',
          tabBarIcon: () => (
            <Icon name="pen-alt" type="font-awesome-5" size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
