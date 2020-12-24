import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Icon, ListItem, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import ButtonComponent from '../../layout/ButtonComponent';
import {API_URL} from '../../../app.json';
import LoadingIndicator from '../../layout/LoadingIndicator';
import {Alert} from 'react-native';

export default function GroupPosts(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  const {groupID} = props.route.params;
  const [groupInfo, setGroupInfo] = useState({
    posts: [{}],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroupInfo = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/group/${groupID}`);
        const groupInfo = response.data;
        setGroupInfo({
          posts: groupInfo.posts,
        });
        setLoading(false);
      } catch (error) {
        setGroupInfo({});
        setLoading(false);
      }
    };
    getGroupInfo();
  }, []);

  const likePost = async (postID) => {
    try {
      const response = await Axios.put(
        `${API_URL}/api/group/${groupID}/post/${postID}/like`,
      );
      setGroupInfo({
        ...groupInfo,
        posts: groupInfo.posts.map((post) => {
          if (post._id === postID) {
            post.likes = [
              ...post.likes,
              {brandName: contextVariables.user.brandName},
            ];
          }
          return post;
        }),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const unlikePost = async (postID) => {
    try {
      const response = await Axios.put(
        `${API_URL}/api/group/${groupID}/post/${postID}/unlike`,
      );
      setGroupInfo({
        ...groupInfo,
        posts: groupInfo.posts.map((post) => {
          if (post._id === postID) {
            post.likes = post.likes.filter(
              (like) => like.brandName !== contextVariables.user.brandName,
            );
          }
          return post;
        }),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const deletePost = async (postID) => {
    try {
      const response = await Axios.delete(
        `${API_URL}/api/group/${groupID}/post/${postID}`,
      );
      setGroupInfo({
        ...groupInfo,
        posts: groupInfo.posts.filter((post) => post._id !== postID),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const openPost = (postID) => {
    return props.navigation.navigate('Group Post', {
      screen: 'View Group Post',
      params: {
        groupID,
        postID,
      },
    });
  };
  return (
    <ScrollView>
      <View style={styles.addButtonView}>
        <ButtonComponent
          title="Add Post"
          icon={
            <Icon
              name="add"
              size={30}
              color="white"
              style={{paddingRight: 10}}
            />
          }
          buttonStyle={styles.addButton}
          onPress={() =>
            props.navigation.navigate('Group Post', {
              screen: 'Add Group Post',
              params: {groupID},
            })
          }
        />
      </View>
      {loading === false ? (
        groupInfo.posts.length > 0 ? (
          groupInfo.posts.map((post) => (
            <ListItem
              bottomDivider
              key={post._id}
              onPress={() => openPost(post._id)}>
              <ListItem.Content>
                <ListItem.Title
                  onPress={() =>
                    props.navigation.navigate('View Group Post', {
                      groupID,
                      postID: post._id,
                    })
                  }
                  style={styles.title}>
                  {post.title}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.content}>
                  {post.content}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.writer}>
                  by: {post.writer}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{paddingTop: 10}}>
                  <View style={styles.iconContainer}>
                    {post.likes.find(
                      (like) =>
                        like.brandName === contextVariables.user.brandName,
                    ) ? (
                      <Icon
                        name="thumbs-up"
                        type="font-awesome"
                        color="#910000"
                        onPress={() => unlikePost(post._id)}
                        size={30}
                      />
                    ) : (
                      <Icon
                        name="thumbs-o-up"
                        type="font-awesome"
                        color="#910000"
                        onPress={() => likePost(post._id)}
                        size={30}
                      />
                    )}
                    <Text style={{color: '#910000'}}>{post.likes.length}</Text>
                  </View>

                  <View style={styles.iconContainer}>
                    <Icon
                      name="comment"
                      color="#910000"
                      size={30}
                      onPress={() => openPost(post._id)}
                    />
                    <Text style={{color: '#910000'}}>
                      {post.comments.length}
                    </Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Icon
                      style={{paddingRight: 10}}
                      name="open-in-full"
                      color="#910000"
                      onPress={() => openPost(post._id)}
                      size={30}
                    />
                  </View>
                  {post.writer === contextVariables.user.brandName && (
                    <>
                      <Icon
                        style={{paddingRight: 10}}
                        name="edit"
                        color="#910000"
                        size={30}
                        onPress={() =>
                          props.navigation.navigate('Group Post', {
                            screen: 'Edit Group Post',
                            params: {groupID, post},
                          })
                        }
                      />
                      <Icon
                        style={{paddingRight: 10}}
                        name="delete"
                        color="#910000"
                        onPress={() =>
                          Alert.alert(
                            'Delete Post',
                            'Are you sure you want to delete this post?',
                            [
                              {
                                text: 'No',
                              },
                              {
                                text: 'Yes',
                                onPress: () => deletePost(post._id),
                              },
                            ],
                            {cancelable: true},
                          )
                        }
                        size={30}
                      />
                    </>
                  )}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h4>No post found</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 10,
  },
  addButton: {
    backgroundColor: '#910000',
  },
  addButtonView: {
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  viewButton: {
    backgroundColor: '#910000',
  },
  writer: {
    fontStyle: 'italic',
  },
});
