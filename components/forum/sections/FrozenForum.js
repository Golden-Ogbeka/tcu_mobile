import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import ForumTopics from '../layout/ForumTopics';
import {API_URL} from '../../../app.json';
import Axios from 'axios';
import LoadingIndicator from '../../layout/LoadingIndicator';

export default function FrozenForum() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getTopics = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${API_URL}/api/topics/?section=Frozen`,
        );
        const topicsReceived = response.data;
        setTopics(topicsReceived);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getTopics();
  }, []);
  return (
    <ScrollView>
      {loading === false ? (
        topics.length > 0 ? (
          <ForumTopics section="Frozen" />
        ) : (
          <View style={styles.container}>
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
  container: {
    alignItems: 'center',
  },
});