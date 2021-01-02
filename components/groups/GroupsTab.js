import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import AllGroups from './AllGroups';
import GroupStack from './GroupStack';
import NewGroup from './NewGroup';
import TrendingGroups from './TrendingGroups';
import UserGroups from './UserGroups';

const Tab = createBottomTabNavigator();

export default function GroupsTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Your Groups') {
            iconName = focused ? 'group' : 'group';
          } else if (route.name === 'Trending') {
            iconName = focused ? 'trending-up' : 'trending-up';
          } else if (route.name === 'New Group') {
            iconName = focused ? 'add-circle-outline' : 'add-circle';
          } else if (route.name === 'All Groups') {
            iconName = focused ? 'groups' : 'groups';
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
          fontSize: 20,
          // fontWeight: 'bold',
        },
      }}>
      <Tab.Screen name="Your Groups" component={UserGroups} />
      <Tab.Screen name="Trending" component={TrendingGroups} />
      {/* <Tab.Screen name="New Group" component={NewGroup} /> */}
      <Tab.Screen name="All Groups" component={AllGroups} />
      <Tab.Screen
        name="Group Stack"
        component={GroupStack}
        options={{
          tabBarButton: () => null,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
