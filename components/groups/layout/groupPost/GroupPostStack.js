import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewGroupPost from './ViewGroupPost';
import EditGroupPost from './EditGroupPost';
import EditPostComment from './EditPostComment';
import AddPostComment from './AddPostComment';
import AddGroupPost from './AddGroupPost';

const Stack = createStackNavigator();
export default function GroupPostStack() {
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
        name="View Group Post"
        component={ViewGroupPost}
        options={{title: 'Post Details'}}
      />
      <Stack.Screen
        name="Add Group Post"
        component={AddGroupPost}
        options={{title: 'Add Post'}}
      />
      <Stack.Screen
        name="Edit Group Post"
        component={EditGroupPost}
        options={{title: 'Edit Post'}}
      />
      <Stack.Screen
        name="Edit Post Comment"
        component={EditPostComment}
        options={{title: 'Edit Comment'}}
      />
      <Stack.Screen
        name="Add Post Comment"
        component={AddPostComment}
        options={{title: 'Add Comment'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
