import React from 'react';
import {PickerIOSBase, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

export default function NewTopic() {
  return (
    <View>
      <Text>Create new Topic</Text>
      <Input label="Title" />
      <Input label="Content" />
      <Input label="Dropdown Section" />
      <Button title="Create Topic" />
    </View>
  );
}

const styles = StyleSheet.create({});
