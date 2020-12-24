import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {API_URL} from '../../../../app.json';
import {ScrollView} from 'react-native';
import {
  Button,
  Card,
  Divider,
  Icon,
  ListItem,
  Text,
} from 'react-native-elements';
import {Alert} from 'react-native';
import {useAppContext} from '../../../../context/AppContext';
import LoadingIndicator from '../../../layout/LoadingIndicator';

export default function ViewGroupPost(props) {
  const {groupID, postID} = props.route.params;
  const {contextVariables, setContextVariables} = useAppContext();
  const [postInfo, setPostInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroupInfo = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/group/${groupID}`);
        const groupInfo = response.data;
        const post = groupInfo.posts.filter((post) => post._id === postID);
        setPostInfo(post[0]); //Because it came as an array
        setLoading(false);
      } catch (error) {
        setPostInfo({});
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
      setPostInfo({
        ...postInfo,
        likes: [
          ...postInfo.likes,
          {brandName: contextVariables.user.brandName},
        ],
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
      setPostInfo({
        ...postInfo,
        likes: postInfo.likes.filter(
          (like) => like.brandName !== contextVariables.user.brandName,
        ),
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
      return props.navigation.push('Group Posts');
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const deleteComment = async (commentID) => {
    try {
      const response = await Axios.delete(
        `${API_URL}/api/group/${groupID}/post/${postID}/comment/${commentID}`,
      );
      setPostInfo({
        ...postInfo,
        comments: postInfo.comments.filter(
          (eachComment) => eachComment._id !== commentID,
        ),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  return (
    <ScrollView>
      {loading === false ? (
        Object.keys(postInfo).length > 0 ? (
          <ScrollView>
            <ListItem bottomDivider key={postInfo._id}>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>
                  {postInfo.title}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.content}>
                  {postInfo.content}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.writer}>
                  by: {postInfo.writer}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{paddingTop: 10}}>
                  <View style={styles.iconContainer}>
                    {postInfo.likes.find(
                      (like) =>
                        like.brandName === contextVariables.user.brandName,
                    ) ? (
                      <Icon
                        name="thumbs-up"
                        type="font-awesome"
                        color="#910000"
                        onPress={() => unlikePost(postInfo._id)}
                        size={30}
                      />
                    ) : (
                      <Icon
                        name="thumbs-o-up"
                        type="font-awesome"
                        color="#910000"
                        onPress={() => likePost(postInfo._id)}
                        size={30}
                      />
                    )}
                    <Text style={{color: '#910000'}}>
                      {postInfo.likes.length}
                    </Text>
                  </View>

                  <View style={styles.iconContainer}>
                    <Icon name="comment" color="#910000" size={30} />
                    <Text style={{color: '#910000'}}>
                      {postInfo.comments.length}
                    </Text>
                  </View>
                  {postInfo.writer === contextVariables.user.brandName && (
                    <>
                      <Icon
                        style={{paddingRight: 10}}
                        name="edit"
                        color="#910000"
                        size={40}
                        onPress={() =>
                          props.navigation.navigate('Group Post', {
                            screen: 'Edit Group Post',
                            params: {groupID, post: postInfo},
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
                                onPress: () => deletePost(postInfo._id),
                              },
                            ],
                            {cancelable: true},
                          )
                        }
                        size={40}
                      />
                    </>
                  )}
                </ListItem.Subtitle>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                  }}>
                  <Text h4>Comments</Text>
                  <Button
                    title="Add Comment"
                    icon={{name: 'add', color: '#910000'}}
                    onPress={() =>
                      props.navigation.push('Add Post Comment', {
                        groupID,
                        postID,
                      })
                    }
                    buttonStyle={{paddingRight: 10}}
                    titleStyle={{color: '#910000'}}
                    type="clear"
                  />
                </View>
                <ScrollView>
                  {postInfo.comments.length > 0 ? (
                    postInfo.comments.map((comment) => (
                      <Card key={comment._id}>
                        <Card.FeaturedTitle style={{color: 'black'}}>
                          {comment.comment}
                        </Card.FeaturedTitle>
                        <Card.Divider />
                        <Card.FeaturedSubtitle style={{color: 'black'}}>
                          by: {comment.writer}
                        </Card.FeaturedSubtitle>
                        <Card.FeaturedSubtitle>
                          {contextVariables.user.brandName ===
                            comment.writer && (
                            <View style={{flexDirection: 'row'}}>
                              <Icon
                                name="edit"
                                style={{paddingRight: 10}}
                                color="#910000"
                                onPress={() =>
                                  props.navigation.navigate(
                                    'Edit Post Comment',
                                    {groupID, postID, comment},
                                  )
                                }
                                size={30}
                              />
                              <Icon
                                name="delete"
                                color="#910000"
                                style={{paddingRight: 10}}
                                size={30}
                                onPress={() =>
                                  Alert.alert(
                                    'Delete Comment',
                                    'Are you sure you want to delete this comment?',
                                    [
                                      {
                                        text: 'No',
                                      },
                                      {
                                        text: 'Yes',
                                        onPress: () =>
                                          deleteComment(comment._id),
                                      },
                                    ],
                                    {cancelable: true},
                                  )
                                }
                              />
                            </View>
                          )}
                        </Card.FeaturedSubtitle>
                      </Card>
                    ))
                  ) : (
                    <Text>No comment</Text>
                  )}
                </ScrollView>
              </ListItem.Content>
            </ListItem>
          </ScrollView>
        ) : (
          <Text>Post not found</Text>
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
