import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Divider, Icon, Text} from 'react-native-elements';

export default function TrendingTopics() {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Trending Topics
        </Text>
      </View>
      <Card>
        <Card.Title onPress={() => navigation.navigate('PoultryProducts')}>
          <Text h4>Topic</Text>
        </Card.Title>
        <Card.Divider style={styles.divider} />
        <Text style={styles.content}>Content</Text>
        <Divider style={styles.divider} />
        <Text style={styles.details}>Writer: </Text>
        <View style={styles.topicDetails}>
          <Text style={styles.details}>Views: </Text>
          <Text style={styles.details}>Likes:</Text>
        </View>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Topic Details"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('PoultryProducts')}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
  image: {
    width: Card.width,
    height: 200,
    resizeMode: 'contain',
  },
  divider: {
    backgroundColor: '#910000',
  },
  content: {
    marginBottom: 10,
    fontSize: 20,
  },
  description: {
    marginBottom: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
  details: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#910000',
  },
  topicDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
