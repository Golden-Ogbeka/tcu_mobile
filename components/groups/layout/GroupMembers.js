import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Avatar, Icon, ListItem, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import {API_URL} from '../../../app.json';
import {Alert} from 'react-native';
import LoadingIndicator from '../../layout/LoadingIndicator';

export default function GroupMembers(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  const {groupID} = props.route.params;
  const [groupInfo, setGroupInfo] = useState({
    members: [{}],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroupInfo = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/group/${groupID}`);
        const groupInfo = response.data;
        setGroupInfo({
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

  const removeMember = async (brandName) => {
    try {
      const response = await Axios.delete(
        `${API_URL}/api/group/${groupID}/member/${brandName}`,
      );
      setGroupInfo({
        ...groupInfo,
        members: groupInfo.members.filter(
          (member) => member.brandName !== brandName,
        ),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const makeAdmin = async (brandName) => {
    try {
      const response = await Axios.put(
        `${API_URL}/api/group/${groupID}/admin/${brandName}`,
      );
      setGroupInfo({
        ...groupInfo,
        members: groupInfo.members.map((member) => {
          if (member.brandName === brandName) {
            member.role = 'Admin';
          }
          return member;
        }),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const removeAdmin = async (brandName) => {
    try {
      const response = await Axios.delete(
        `${API_URL}/api/group/${groupID}/admin/${brandName}`,
      );
      setGroupInfo({
        ...groupInfo,
        members: groupInfo.members.map((member) => {
          if (member.brandName === brandName) {
            member.role = 'Member';
          }
          return member;
        }),
      });
    } catch (error) {
      console.log(error);
      Alert.alert(error.response.data);
    }
  };

  return (
    <ScrollView>
      {loading === false ? (
        groupInfo.members.length > 0 ? (
          groupInfo.members.map((member) => (
            <ListItem bottomDivider key={member._id}>
              <Avatar
                size="small"
                rounded
                icon={{
                  name: member.role === 'Admin' ? 'verified-user' : 'person',
                  size: 25,
                }}
                overlayContainerStyle={{backgroundColor: '#910000'}}
                titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{member.brandName}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>{member.role}</ListItem.Subtitle>
              </ListItem.Content>
              {groupInfo.members.find(
                (member) =>
                  member.brandName === contextVariables.user.brandName &&
                  member.role === 'Admin',
              ) && (
                <View style={{flexDirection: 'row'}}>
                  {member.role === 'Admin' ? (
                    <Icon
                      name="times-circle"
                      type="font-awesome"
                      color="black"
                      onPress={() =>
                        Alert.alert(
                          'Remove Admin',
                          "Are you sure you want to remove this user's Admin priviledges?",
                          [
                            {
                              text: 'No',
                            },
                            {
                              text: 'Yes',
                              onPress: () => removeAdmin(member.brandName),
                            },
                          ],
                          {cancelable: true},
                        )
                      }
                    />
                  ) : (
                    <Icon
                      name="verified-user"
                      color="#910000"
                      onPress={() =>
                        Alert.alert(
                          'Make Admin',
                          'Are you sure you want to make this user an Admin of this group?',
                          [
                            {
                              text: 'No',
                            },
                            {
                              text: 'Yes',
                              onPress: () => makeAdmin(member.brandName),
                            },
                          ],
                          {cancelable: true},
                        )
                      }
                    />
                  )}
                  <Icon
                    name="person-remove"
                    color="#910000"
                    onPress={() =>
                      Alert.alert(
                        'Remove User',
                        'Are you sure you want to remove this user from this group?',
                        [
                          {
                            text: 'No',
                          },
                          {
                            text: 'Yes',
                            onPress: () => removeMember(member.brandName),
                          },
                        ],
                        {cancelable: true},
                      )
                    }
                  />
                </View>
              )}
            </ListItem>
          ))
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h4>No member found</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
