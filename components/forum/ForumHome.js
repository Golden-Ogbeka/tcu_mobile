import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import UserTopics from './UserTopics';
import ForumSectionStack from './sections/ForumSectionStack';
import TrendingTopics from './TrendingTopics';
import TopicStack from './topicOperations/TopicStack';
import NewTopic from './topicOperations/NewTopic';

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
          name="Sections Tab"
          component={ForumSectionStack}
          options={{
            tabBarIcon: () => <Icon name="category" size={40} />,
            title: 'Sections',
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
          name="User Topics"
          component={UserTopics}
          options={{
            tabBarIcon: () => (
              <Icon name="list" type="font-awesome-5" size={40} />
            ),
            title: 'Your Topics',
          }}
        />
        <Tab.Screen
          name="Topic Stack"
          component={TopicStack}
          options={{
            tabBarButton: () => null,
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
