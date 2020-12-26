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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'UserProfile') {
            iconName = focused ? 'person-outline' : 'person';
          } else if (route.name === 'ProducerProfile') {
            iconName = focused ? 'attach-money' : 'attach-money';
          } else if (route.name === 'ForumProfile') {
            iconName = focused ? 'forum' : 'forum';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={40} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          height: 70,
        },
        activeBackgroundColor: '#910000',
        keyboardHidesTabBar: true,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
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
        }}
      />
      <Tab.Screen
        name="ProducerProfile"
        component={ProducerProfile}
        options={{
          title: 'Producer Profile',
        }}
      />
      <Tab.Screen
        name="ForumProfile"
        component={ForumProfile}
        options={{
          title: 'Forum Profile',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
