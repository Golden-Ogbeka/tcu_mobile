import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Divider, ListItem} from 'react-native-elements';

export default function UserStats() {
  return (
    <View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>Groups: 0</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>Forums: 0</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>Products: 0</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>
            Products' Views: 0
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>Brand's Views: 0</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>Messages: 0</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.stats}>
            Date of Registration: 0
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    fontSize: 20,
  },
});
