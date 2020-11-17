import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

import ForumProfile from './ForumProfile';
import NewTopic from './NewTopic';
import ForumSections from './sections/ForumSections';
import ForumSectionStack from './sections/ForumSectionStack';
import TrendingTopics from './TrendingTopics';

const Tab = createBottomTabNavigator();
export default function ForumHome() {
  return (
    <View style={{flex: 1}}>
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
          name="Sections"
          component={ForumSectionStack}
          options={{
            tabBarIcon: () => <Icon name="category" size={40} />,
          }}
        />
        <Tab.Screen
          name="Trending Topics"
          component={TrendingTopics}
          options={{
            tabBarIcon: () => <Icon name="trending-up" size={40} />,
            tabBarLabel: 'Trending',
          }}
        />
        <Tab.Screen
          name="New Topic"
          component={NewTopic}
          options={{
            tabBarIcon: () => <Icon name="plus" type="octicon" size={40} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ForumProfile}
          options={{
            tabBarIcon: () => (
              <Icon name="user" type="font-awesome-5" size={40} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
