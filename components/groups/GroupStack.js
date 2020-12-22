import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AllGroups from './AllGroups';
import GroupInfo from './layout/GroupInfo';
import UserGroups from './UserGroups';
import GroupPosts from './layout/GroupPosts';
import GroupMembers from './layout/GroupMembers';
import ViewGroupPost from './layout/ViewGroupPost';

const Stack = createStackNavigator();
export default function GroupsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#910000',
        },
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Group Info"
        component={GroupInfo}
        options={{title: "Group's Details"}}
      />
      <Stack.Screen
        name="Group Posts"
        component={GroupPosts}
        options={{title: "Group's Posts"}}
      />
      <Stack.Screen
        name="View Group Post"
        component={ViewGroupPost}
        options={{title: 'Post Details'}}
      />
      <Stack.Screen
        name="Group Members"
        component={GroupMembers}
        options={{title: "Group's Members"}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
