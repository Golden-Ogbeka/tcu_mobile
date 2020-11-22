import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Divider, Icon, ListItem} from 'react-native-elements';

export default function Messages() {
  return (
    <View>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.sender}>From: </ListItem.Title>
          <Text style={styles.message}>Message</Text>
          <Text style={styles.date}>Date</Text>
        </ListItem.Content>
        <Button
          icon={<Icon name="reply" type="font-awesome" color="white" />}
          buttonStyle={{backgroundColor: 'gold'}}
        />
        <Button
          icon={<Icon name="trash" type="font-awesome" color="white" />}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  sender: {
    fontWeight: 'bold',
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
  },
  date: {
    fontStyle: 'italic',
  },
});
