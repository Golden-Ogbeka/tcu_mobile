import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Axios from 'axios';
import {API_URL} from '../../../app.json';
import {Button, Card, Divider, Icon} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';
import ImageComponent from '../../layout/ImageComponent';

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
            <ImageComponent uri={group.image} style={styles.image} />
            <Card.Divider />
            <Card.Title
              onPress={() =>
                props.navigation.navigate('Group Stack', {
                  screen: 'Group Info',
                  params: {groupID: group._id},
                })
              }>
              <Text style={styles.groupName}>{group.name}</Text>
            </Card.Title>
            <Card.Divider />
            <Text style={styles.founder}>Founder: {group.founder}</Text>
            <Text style={styles.description}>
              Description: {group.description}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.members}>
                Members: {group.members && group.members.length}
              </Text>
              <Text style={styles.members}>
                Posts: {group.posts && group.posts.length}
              </Text>
            </View>
            <ButtonComponent
              icon={
                <Icon name="info" style={{paddingRight: 10}} color="#ffffff" />
              }
              title="View Group Details"
              buttonStyle={styles.button}
              onPress={() =>
                // Nested navigation
                props.navigation.navigate('Group Stack', {
                  screen: 'Group Info',
                  params: {groupID: group._id},
                })
              }
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
    borderRadius: 20,
  },
  founder: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  groupName: {
    fontSize: 30,
    color: '#910000',
  },
  description: {
    marginBottom: 10,
    fontSize: 20,
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
