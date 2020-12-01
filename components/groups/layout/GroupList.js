import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Axios from 'axios';
import {API_URL} from '../../../app.json';
import {Button, Card, Divider, Icon, Text} from 'react-native-elements';

export default function GroupList(props) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroups = async () => {
      try {
        if (props.user) {
          const response = await Axios.get(`${API_URL}/api/groups/user`);
          const groups = response.data;
          setGroups(groups);
        }
        if (props.trending) {
          const response = await Axios.get(`${API_URL}/api/trendingGroups`);
          let groupsReceived = response.data;
          //Because of how the response is received,
          groupsReceived = groupsReceived.map((group) => {
            group.founder = group.founder[0];
            // group.members = group.members[0];
            group.name = group.name[0];
            group.posts = group.posts[0];
            group.description = group.description[0];
            return group;
          });
          setGroups(groupsReceived);
        }
        if (props.all) {
          const response = await Axios.get(`${API_URL}/api/groups`);
          const groups = response.data;
          setGroups(groups);
        }
      } catch (error) {
        setGroups([]);
      }
    };
    getGroups();
  }, []);
  return (
    <View>
      {groups &&
        groups.map((group) => (
          <Card key={group._id}>
            <Image
              source={`${group.image}`}
              accessibilityLabel="Group Image"
              style={styles.image}
            />
            <Divider />
            <Card.Title onPress={() => navigation.navigate('PoultryProducts')}>
              <Text h4>{group.name}</Text>
            </Card.Title>
            <Card.Divider />
            <Text style={styles.founder}>{group.founder}</Text>
            <Text style={styles.description}>{group.description}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.members}>
                Members: {group.members && group.members.length}
              </Text>
              <Text style={styles.members}>
                Posts: {group.posts && group.posts.length}
              </Text>
            </View>
            <Button
              icon={
                <Icon name="info" style={{marginRight: 2}} color="#ffffff" />
              }
              title="View Group Details"
              buttonStyle={styles.button}
              onPress={() => navigation.navigate('PoultryProducts')}
            />
          </Card>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
