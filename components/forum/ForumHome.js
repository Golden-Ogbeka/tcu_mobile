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
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Sections Tab') {
              iconName = focused ? 'category' : 'category';
            } else if (route.name === 'Trending Topics') {
              iconName = focused ? 'trending-up' : 'trending-up';
            } else if (route.name === 'New Topic') {
              iconName = focused ? 'add-circle-outline' : 'add-circle';
            } else if (route.name === 'User Topics') {
              iconName = focused ? 'topic' : 'topic';
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
          name="Sections Tab"
          component={ForumSectionStack}
          options={{
            title: 'Sections',
          }}
        />
        <Tab.Screen
          name="Trending Topics"
          component={TrendingTopics}
          options={{
            title: 'Trending',
          }}
        />
        <Tab.Screen name="New Topic" component={NewTopic} />
        <Tab.Screen
          name="User Topics"
          component={UserTopics}
          options={{
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
