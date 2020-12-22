import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Avatar, Icon, ListItem, Text} from 'react-native-elements';
import {API_URL} from '../../../app.json';
import ButtonComponent from '../../layout/ButtonComponent';
import ImageComponent from '../../layout/ImageComponent';
import LoadingIndicator from '../../layout/LoadingIndicator';
import {useAppContext} from '../../../context/AppContext';
import {Alert} from 'react-native';

export default function GroupInfo(props) {
  const {groupID} = props.route.params;
  const {contextVariables, setContextVariables} = useAppContext();
  const [groupInfo, setGroupInfo] = useState({
    groupID: '',
    type: '',
    founder: '',
    description: '',
    members: [{}],
    posts: [{}],
    name: '',
    image: '',
    rules: '',
  });
  const [loading, setLoading] = useState(true);

  const {
    type,
    founder,
    description,
    members,
    name,
    posts,
    rules,
    image,
  } = groupInfo;

  useEffect(() => {
    const getGroupInfo = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/group/${groupID}`);
        const groupInfo = response.data;
        setGroupInfo({
          groupID: groupInfo._id,
          type: groupInfo.type,
          founder: groupInfo.founder,
          description: groupInfo.description,
          posts: groupInfo.posts,
          name: groupInfo.name,
          rules: groupInfo.rules,
          image: groupInfo.image,
          members: groupInfo.members,
        });
        setLoading(false);
      } catch (error) {
        setGroupInfo({});
        setLoading(false);
      }
    };
    getGroupInfo();
  }, []);

  const joinGroup = async () => {
    try {
      const response = await Axios.post(`${API_URL}/api/group/join/${groupID}`);
      setGroupInfo({
        ...groupInfo,
        members: [...members, {brandName: contextVariables.user.brandName}],
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const leaveGroup = async () => {
    try {
      const response = await Axios.delete(
        `${API_URL}/api/group/${groupID}/member`,
      );
      setGroupInfo({
        ...groupInfo,
        members: members.filter(
          (member) => member.brandName !== contextVariables.user.brandName,
        ),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const deleteGroup = async () => {
    try {
      const response = await Axios.delete(`${API_URL}/api/group/${groupID}`);
      return props.navigation.push('Your Groups');
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  return (
    <ScrollView>
      {loading === false ? (
        Object.keys(groupInfo).length > 0 ? (
          <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
            <View style={styles.buttonView}>
              <ButtonComponent
                title="View Posts"
                icon={
                  <Icon
                    name="description"
                    size={20}
                    color="white"
                    style={{paddingRight: 10}}
                  />
                }
                buttonStyle={styles.controlButton}
                onPress={() => props.navigation.navigate('Group Posts')}
              />

              {members.find(
                (member) =>
                  member.brandName === contextVariables.user.brandName,
              ) ? (
                <ButtonComponent
                  title="Leave Group"
                  icon={
                    <Icon
                      name="sign-out"
                      type="font-awesome"
                      size={20}
                      color="white"
                      style={{paddingRight: 10}}
                    />
                  }
                  buttonStyle={{backgroundColor: 'black'}}
                  onPress={() =>
                    Alert.alert(
                      'Leave Group',
                      'Are you sure you want to leave this group?',
                      [
                        {
                          text: 'No',
                        },
                        {
                          text: 'Yes',
                          onPress: () => leaveGroup(),
                        },
                      ],
                      {cancelable: true},
                    )
                  }
                />
              ) : (
                <ButtonComponent
                  title="Join Group"
                  icon={
                    <Icon
                      name="login"
                      size={20}
                      color="white"
                      style={{paddingRight: 10}}
                    />
                  }
                  buttonStyle={styles.controlButton}
                  onPress={() => joinGroup()}
                />
              )}
            </View>
            <View style={styles.imageContainer}>
              <ImageComponent uri={image} label="Group's Image" />
            </View>

            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'info-circle', type: 'font-awesome-5'}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{name}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's name</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'user', type: 'font-awesome-5'}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{founder}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's founder</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'info-circle', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{description}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's description</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'info', type: 'font-awesome-5'}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{rules}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's rules</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'info', type: 'font-awesome-5'}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{type}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's type</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'description', size: 25}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{posts ? posts.length : 0}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's Posts</ListItem.Subtitle>
              </ListItem.Content>
              <ButtonComponent
                title="View"
                buttonStyle={styles.controlButton}
                onPress={() => props.navigation.navigate('Group Posts')}
              />
            </ListItem>
            <ListItem bottomDivider>
              <Avatar
                size="small"
                rounded
                icon={{name: 'users', type: 'font-awesome', size: 25}}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{members ? members.length : 0}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Group's members</ListItem.Subtitle>
              </ListItem.Content>
              <ButtonComponent
                title="View"
                buttonStyle={styles.controlButton}
                onPress={() =>
                  props.navigation.navigate('Group Members', {
                    groupID,
                  })
                }
              />
            </ListItem>
            {members.find(
              (member) =>
                member.brandName === contextVariables.user.brandName &&
                member.role === 'Admin',
            ) && (
              <ListItem bottomDivider>
                <Avatar
                  size="small"
                  rounded
                  icon={{name: 'trash', type: 'font-awesome', size: 25}}
                  overlayContainerStyle={{backgroundColor: '#910000'}}
                  titleStyle={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    <Text h4>Delete Group</Text>
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    Delete all posts, members and group details
                  </ListItem.Subtitle>
                </ListItem.Content>
                <ButtonComponent
                  icon={{
                    name: 'trash',
                    type: 'font-awesome',
                    color: 'white',
                  }}
                  buttonStyle={styles.controlButton}
                  onPress={() =>
                    Alert.alert(
                      'Leave Group',
                      'Are you sure you want to delete this group?',
                      [
                        {
                          text: 'No',
                        },
                        {
                          text: 'Yes',
                          onPress: () => deleteGroup(),
                        },
                      ],
                      {cancelable: true},
                    )
                  }
                />
              </ListItem>
            )}
          </ScrollView>
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h4>Group not found</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  controlButton: {
    backgroundColor: '#910000',
  },
  buttonView: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
