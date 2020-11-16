import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

export default function NewGroup() {
  return (
    <View>
      <Text>Create new Group</Text>
      <Input label="Group Name" />
      <Input label="Group Type Dropdown" />
      <Input label="Group Description textarea" />
      <Input label="Group Rules textarea" />
      <Button title="Create Group" />
    </View>
  );
}

const styles = StyleSheet.create({});
