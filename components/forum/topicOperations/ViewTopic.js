import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, Alert} from 'react-native';
import {Card, Icon, ListItem, Divider, Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {API_URL} from '../../../app.json';
import {useAppContext} from '../../../context/AppContext';
import InputComponent from '../../layout/InputComponent';
import ButtonComponent from '../../layout/ButtonComponent';
import LoadingIndicator from '../../layout/LoadingIndicator';

export default function ViewTopic(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  const [topicDetails, setTopicDetails] = useState({
    _id: '',
    topic: '',
    content: '',
    brandName: '',
    views: [{}],
    likes: [{}],
    comments: [{}],
    attachment: '',
  });
  const {
    _id,
    topic,
    content,
    brandName,
    views,
    likes,
    comments,
    attachment,
  } = topicDetails;
  const {topicID} = props.route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopicDetails = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/topic/${topicID}`);
        const {
          _id,
          topic,
          content,
          brandName,
          views,
          likes,
          comments,
          attachment,
        } = response.data;
        setTopicDetails({
          _id,
          topic,
          content,
          brandName,
          views,
          likes,
          comments,
          attachment,
        });
        setLoading(false);
      } catch (error) {
        setTopicDetails({});
        setLoading(false);
      }
    };
    getTopicDetails();
  }, []);

  const likeTopic = async (e) => {
    try {
      const response = await Axios.put(`${API_URL}/api/likeTopic/${topicID}`);
      setTopicDetails({
        ...topicDetails,
        likes: [...likes, {brandName: contextVariables.user.brandName}],
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };
  const unlikeTopic = async (e) => {
    try {
      const response = await Axios.put(`${API_URL}/api/unlikeTopic/${topicID}`);
      setTopicDetails({
        ...topicDetails,
        likes: likes.filter(
          (like) => like.brandName !== contextVariables.user.brandName,
        ),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };
  const deleteComment = async (commentID) => {
    try {
      const response = await Axios.delete(
        `${API_URL}/api/forum/comment/${topicID}/${commentID}`,
      );
      setTopicDetails({
        ...topicDetails,
        comments: comments.filter((comment) => comment._id !== commentID),
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };
  const addComment = async (values) => {
    try {
      const commentEntry = values.comment;
      const response = await Axios.post(`${API_URL}/api/comment/${topicID}`, {
        commentEntry,
      });
      const newComment = response.data; //Using this so user can immediately work on new state
      setTopicDetails({
        ...topicDetails,
        comments: [
          ...comments,
          {
            brandName: newComment.brandName,
            comment: newComment.comment,
            _id: newComment._id,
          },
        ],
      });
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  const deleteTopic = async () => {
    try {
      const response = await Axios.delete(`${API_URL}/api/topic/${topicID}`);
      Alert.alert(response.data);
      return props.navigation.navigate('User Topics');
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      {loading === false ? (
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
          <Card>
            <Card.FeaturedTitle style={styles.topic}>
              {topic}
            </Card.FeaturedTitle>
            <Card.Divider />
            <Card.FeaturedSubtitle style={styles.content}>
              {content}
            </Card.FeaturedSubtitle>
            <Text
              style={{fontSize: 18, fontStyle: 'italic'}}
              onPress={() =>
                props.navigation.navigate('View Writer', {
                  brandName: brandName,
                })
              }>
              Writer: {brandName}
            </Text>
            <Card.Divider />
            <View style={styles.topicDetails}>
              <View style={styles.iconContainer}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={40}
                  color="#910000"
                  onPress={() =>
                    props.navigation.navigate('View Writer', {
                      brandName: brandName,
                    })
                  }
                />
                <Text
                  style={styles.topicStats}
                  onPress={() =>
                    props.navigation.navigate('View Writer', {
                      brandName: brandName,
                    })
                  }>
                  View Writer
                </Text>
              </View>
              <View style={styles.topicStatsContainer}>
                <View style={styles.iconContainer}>
                  {likes.find(
                    (like) =>
                      like.brandName === contextVariables.user.brandName,
                  ) ? (
                    <Icon
                      name="thumb-up-alt"
                      size={40}
                      color="#910000"
                      onPress={() => unlikeTopic()}
                    />
                  ) : (
                    <Icon
                      name="thumb-up-off-alt"
                      size={40}
                      color="#910000"
                      onPress={() => likeTopic()}
                    />
                  )}
                  <Text style={styles.topicStats}>
                    {likes ? likes.length : 0}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <Icon name="visibility" size={40} color="#910000" />
                  <Text style={styles.topicStats}>
                    {views ? views.length : 0}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  <Icon name="comment" size={40} color="#910000" />
                  <Text style={styles.topicStats}>
                    {comments ? comments.length : 0}
                  </Text>
                </View>
                {brandName === contextVariables.user.brandName && (
                  <>
                    <View style={styles.iconContainer}>
                      <Icon
                        name="edit"
                        size={40}
                        color="#910000"
                        onPress={() =>
                          props.navigation.navigate('Edit Topic', {
                            topic: topicDetails,
                          })
                        }
                      />
                    </View>
                    <View style={styles.iconContainer}>
                      <Icon
                        name="delete"
                        size={40}
                        color="#910000"
                        onPress={() =>
                          Alert.alert(
                            'Delete Topic',
                            'Are you sure you want to delete this topic?',
                            [
                              {
                                text: 'No',
                              },
                              {
                                text: 'Yes',
                                onPress: () => deleteTopic(),
                              },
                            ],
                            {cancelable: true},
                          )
                        }
                      />
                    </View>
                  </>
                )}
              </View>
            </View>
            <Card.Divider />
            <Text style={{fontSize: 20}}>Comments</Text>
            <ScrollView contentContainerStyle={styles.commentsContainer}>
              {comments && comments.length > 0 ? (
                comments.map((comment) => (
                  <ListItem bottomDivider topDivider key={comment._id}>
                    <ListItem.Content>
                      <ListItem.Title>
                        <Text style={{fontWeight: 'normal', fontSize: 25}}>
                          {comment.comment}
                        </Text>
                      </ListItem.Title>
                      <ListItem.Subtitle
                        style={{fontSize: 18, fontStyle: 'italic'}}>
                        by: {comment.brandName}
                      </ListItem.Subtitle>
                      {comment.brandName ===
                        contextVariables.user.brandName && (
                        <ListItem.Subtitle style={{paddingTop: 10}}>
                          {/* <Icon
                            name="pen"
                            iconStyle={{paddingRight: 10}}
                            type="font-awesome-5"
                            color="#910000"
                            onPress={() => likeTopic()}
                          /> */}
                          <Icon
                            name="trash"
                            iconStyle={{paddingRight: 10, paddingRight: 10}}
                            type="font-awesome"
                            color="#910000"
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
                                    onPress: () => deleteComment(comment._id),
                                  },
                                ],
                                {cancelable: true},
                              )
                            }
                          />
                        </ListItem.Subtitle>
                      )}
                    </ListItem.Content>
                  </ListItem>
                ))
              ) : (
                <Text style={{fontSize: 18}}>No comment</Text>
              )}
              <Divider style={{padding: 10, backgroundColor: 'white'}} />
              <Formik
                initialValues={{comment: ''}}
                validationSchema={Yup.object({
                  comment: Yup.string().required('Comment cannot be empty'),
                })}
                onSubmit={(values) => addComment(values)}>
                {(props) => (
                  <>
                    <InputComponent
                      value={props.values.comment}
                      placeholder="Type your comment"
                      onSubmitEditing={props.handleSubmit}
                      touched={props.touched.comment}
                      errors={props.errors.comment}
                      leftIcon={{name: 'comment', color: '#910000'}}
                      onChangeText={props.handleChange('comment')}
                      onBlur={props.handleBlur('comment')}
                    />
                    <ButtonComponent
                      title="Add comment"
                      icon={
                        <Icon
                          name="plus"
                          type="font-awesome-5"
                          size={25}
                          color="white"
                          style={{paddingRight: 10}}
                        />
                      }
                      onPress={props.handleSubmit}
                      disabled={!props.isValid}
                      loading={props.isSubmitting}
                    />
                  </>
                )}
              </Formik>
            </ScrollView>
          </Card>
        </ScrollView>
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  commentsContainer: {
    // maxHeight: 100,
    overflow: 'scroll',

    // max-height: 100vh;
    // margin-bottom: 10px;
    // overflow: scroll;
    // -webkit-overflow-scrolling: touch;
  },
  content: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'normal',
  },
  iconContainer: {
    alignItems: 'center',
  },
  likeButton: {
    width: 40,
    backgroundColor: '#910000',
  },
  topic: {
    fontSize: 30,
    color: 'black',
  },
  topicDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  topicStatsContainer: {
    flexDirection: 'row',
  },
  topicStats: {
    fontSize: 18,
  },
});
