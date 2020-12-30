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

export default function TrendingTopics(props) {
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
    <ScrollView contentContainerStyle={styles.container}>
      {loading === false ? (
        trendingTopics.length > 0 ? (
          trendingTopics.map((topic) => (
            <View key={topic._id}>
              <ForumTopics topicID={topic._id} {...props} />
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
  container: {
    paddingBottom: 20,
  },
});
