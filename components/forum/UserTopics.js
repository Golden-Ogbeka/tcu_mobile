import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Divider, Icon, Text} from 'react-native-elements';
import {API_URL} from '../../app.json';
import LoadingIndicator from '../layout/LoadingIndicator';
import ForumTopics from './layout/ForumTopics';

export default function UserTopics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopics = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${API_URL}/api/topics/?brandName=GOLDEN`,
        );
        const topicsReceived = response.data;
        setTopics(topicsReceived);
        setLoading(false);
      } catch (error) {
        setTopics([]);
        setLoading(false);
      }
    };
    getTopics();
  }, []);
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Your Topics
        </Text>
      </View>
      {loading === false ? (
        topics.length > 0 ? (
          <ForumTopics brandName="GOLDEN" />
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h3>No topics found</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#910000',
  },
  topicDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
