import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Icon, ListItem} from 'react-native-elements';
import LoadingIndicator from '../../layout/LoadingIndicator';
import {API_URL} from '../../../app.json';

export default function ViewMessages(props) {
  const [loading, setLoading] = useState(true);
  const [messageDetails, setMessageDetails] = useState({
    messages: [],
    conversations: [],
  });
  const {messages, conversations} = messageDetails;

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/messages`);
        const {messages, conversations} = response.data;
        setMessageDetails({
          messages,
          conversations,
        });
        setLoading(false);
      } catch (error) {
        setMessageDetails({
          messages: [],
          conversations: [],
        });
        setLoading(false);
      }
    };
    getMessages();
  }, []);

  const deleteMessage = async (conversation) => {
    // The wrong messge gets deleted
    try {
      const response = await Axios.delete(
        `${API_URL}/api/message/${conversation._id}`,
      );
      setMessageDetails({
        ...messageDetails,
        conversations: messageDetails.conversations.filter(
          (item) => item._id !== conversation._id,
        ),
      });
      Alert.alert('Success', response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.response.data);
    }
  };

  return (
    <ScrollView>
      {loading === false ? (
        messages.length > 0 ? (
          conversations.map((conversation, index) => (
            <ListItem key={conversation._id} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.sender}>
                  From: {conversation.senderName}
                </ListItem.Title>
                <Text style={styles.message}>{messages[index]}</Text>
                <ListItem.Subtitle style={styles.date}>
                  Date: {conversation.timestamp}
                </ListItem.Subtitle>
              </ListItem.Content>
              <Button
                icon={<Icon name="reply" type="font-awesome" color="white" />}
                buttonStyle={{
                  backgroundColor: conversation.replied ? 'grey' : 'gold',
                }}
                onPress={() =>
                  props.navigation.navigate('Send Message', {
                    senderEmail: conversation.senderEmail,
                    type: 'reply',
                    messageID: conversation._id,
                  })
                }
              />
              <Button
                icon={<Icon name="trash" type="font-awesome" color="white" />}
                buttonStyle={{backgroundColor: '#910000'}}
                onPress={() =>
                  Alert.alert(
                    'Delete Message',
                    'Are you sure you want to delete this message?',
                    [
                      {
                        text: 'No',
                      },
                      {
                        text: 'Yes',
                        onPress: () => deleteMessage(conversation),
                      },
                    ],
                    {cancelable: true},
                  )
                }
              />
            </ListItem>
          ))
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
            }}>
            <Text h4>You have no message</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sender: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  message: {
    fontSize: 20,
    paddingBottom: 20,
  },
  date: {
    fontStyle: 'italic',
  },
});
