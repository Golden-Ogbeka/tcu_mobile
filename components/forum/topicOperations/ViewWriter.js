import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
import {API_URL} from '../../../app.json';
import ButtonComponent from '../../layout/ButtonComponent';
import LoadingIndicator from '../../layout/LoadingIndicator';

export default function ViewWriter(props) {
  const {brandName} = props.route.params;
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopics = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${API_URL}/api/topics/?brandName=${brandName}`,
        );
        const writerTopics = response.data;
        setTopics(writerTopics);
        setLoading(false);
      } catch (error) {
        setTopics([]);
        setLoading(false);
      }
    };
    getTopics();
  }, []);
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', flex: 1}}>
      {loading === false ? (
        topics.length > 0 ? (
          <ScrollView>
            <View
              style={{
                alignItems: 'center',
                padding: 10,
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                Brand name: {brandName}
              </Text>
            </View>
            <Divider />
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25}}>Topics ({topics.length})</Text>
            </View>
            {topics.map((topic) => (
              <ListItem bottomDivider key={topic._id}>
                <ListItem.Content>
                  <ListItem.Title>
                    <Text style={{fontSize: 25}}>{topic.topic}</Text>
                  </ListItem.Title>
                  <ListItem.Subtitle>{topic.content}</ListItem.Subtitle>
                </ListItem.Content>
                <ButtonComponent
                  title="View"
                  buttonStyle={styles.topicButton}
                  onPress={() =>
                    props.navigation.push('View Topic', {
                      topicID: topic._id,
                    })
                  }
                />
              </ListItem>
            ))}
          </ScrollView>
        ) : (
          <Text>No topics written</Text>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 10,
  },
  topicButton: {
    backgroundColor: '#910000',
  },
});
