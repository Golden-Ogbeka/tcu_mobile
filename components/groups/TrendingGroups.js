import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Divider, Icon, Text} from 'react-native-elements';

export default function TrendingGroups() {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Trending Groups
        </Text>
      </View>
      <Card>
        <Image
          source={require('../../assets/images/logo/tcu.png')}
          accessibilityLabel="Group Image"
          style={styles.image}
        />
        <Divider />
        <Card.Title onPress={() => navigation.navigate('PoultryProducts')}>
          <Text h4>Group Name</Text>
        </Card.Title>
        <Card.Divider />
        <Text style={styles.founder}>Founder</Text>
        <Text style={styles.description}>Group Description</Text>
        <Text style={styles.members}>Members</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Group Details"
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
  founder: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
  members: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#910000',
  },
});
