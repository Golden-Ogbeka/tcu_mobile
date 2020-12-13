import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Icon, ListItem} from 'react-native-elements';
import {useAppContext} from '../../context/AppContext';
import LoadingIndicator from '../layout/LoadingIndicator';
import {API_URL} from '../../app.json';

export default function Messages() {
  const {contextVariables, setVariables} = useAppContext();
  const [loading, setLoading] = useState(false);
  const [messageDetails, setMessageDetails] = useState({
    messages: [],
    conversations: [],
  });
  const {messages, conversations} = messageDetails;

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await Axios.get(`${API_URL}/api/messages`);
        const {messages, conversations} = response.data;
        setMessageDetails({
          messages,
          conversations,
        });
      } catch (error) {
        setMessageDetails({
          messages: [],
          conversations: [],
        });
      }
    };
    getMessages();
  }, []);

  const deleteMessage = async (conversation) => {
    Alert.prompt();
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
                buttonStyle={{backgroundColor: 'gold'}}
              />
              <Button
                icon={<Icon name="trash" type="font-awesome" color="white" />}
                buttonStyle={{backgroundColor: '#910000'}}
                onPress={() => deleteMessage(conversation)}
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
