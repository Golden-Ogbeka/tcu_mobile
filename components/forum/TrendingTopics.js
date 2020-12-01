import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button, Card, Divider, Icon, Text} from 'react-native-elements';
import {API_URL} from '../../app.json';
import LoadingIndicator from '../layout/LoadingIndicator';
import ForumTopics from './layout/ForumTopics';

export default function TrendingTopics() {
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingTopics = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/trendingTopics`);
        const trendingTopics = response.data;
        setTrendingTopics(trendingTopics);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setTrendingTopics([]);
      }
    };
    getTrendingTopics();
  }, []);
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Trending Topics
        </Text>
      </View>
      {loading === false ? (
        trendingTopics.length > 0 ? (
          trendingTopics.map((topic) => (
            <View key={topic._id}>
              <ForumTopics topicID={topic._id} />
            </View>
          ))
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h3>No trending topics</Text>
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
