import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Card, Divider, Icon} from 'react-native-elements';
import {API_URL} from '../../../app.json';
import Axios from 'axios';
import ButtonComponent from '../../layout/ButtonComponent';

export default function ForumTopics(props) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      let response = '';
      let topicsReceived = [];
      try {
        if (props.section) {
          response = await Axios.get(
            `${API_URL}/api/topics/?section=${props.section}`,
          );
          topicsReceived = response.data;
          setTopics(topicsReceived);
        }
        if (props.topicID) {
          response = await Axios.get(`${API_URL}/api/topic/${props.topicID}`);
          topicsReceived = response.data;
          setTopics([topicsReceived]);
        }
        if (props.brandName) {
          response = await Axios.get(
            `${API_URL}/api/topics/?brandName=${props.brandName}`,
          );
          topicsReceived = response.data;
          setTopics(topicsReceived);
        }
      } catch (error) {
        setTopics([]);
      }
    };
    getTopics();
  }, []);

  return (
    <ScrollView>
      {topics &&
        topics.map((topic) => (
          <Card key={topic._id}>
            <Card.Title
              onPress={() =>
                props.navigation.navigate('View Topic', {topicID: topic._id})
              }>
              <Text style={styles.topic}>{topic.topic}</Text>
            </Card.Title>
            <Card.Divider style={styles.divider} />
            <Text style={styles.content}>{topic.content}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.writer}>Writer: {topic.brandName}</Text>
            <View style={styles.topicDetails}>
              <Text style={styles.details}>
                Views: {topic.views ? topic.views.length : 0}
              </Text>
              <Text style={styles.details}>
                Likes: {topic.likes ? topic.likes.length : 0}
              </Text>
            </View>
            <ButtonComponent
              icon={
                <Icon name="info" style={{paddingRight: 10}} color="#ffffff" />
              }
              title="View Topic Details"
              buttonStyle={styles.button}
              onPress={() =>
                props.navigation.navigate('Topic Stack', {
                  screen: 'View Topic',
                  params: {topicID: topic._id},
                })
              }
            />
          </Card>
        ))}
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
  divider: {
    backgroundColor: '#910000',
  },
  content: {
    marginBottom: 10,
    fontSize: 20,
  },
  description: {
    marginBottom: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
  details: {
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#910000',
  },
  topic: {
    fontSize: 25,
  },
  topicDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  writer: {
    marginVertical: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
});
