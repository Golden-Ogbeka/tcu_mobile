import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import LoadingIndicator from '../layout/LoadingIndicator';
import GroupList from './layout/GroupList';
import {API_URL} from '../../app.json';

export default function TrendingGroups(props) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroups = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/groups/user`);
        const groupsReceived = response.data;
        setGroups(groupsReceived);
        setLoading(false);
      } catch (error) {
        setGroups([]);
        setLoading(false);
      }
    };
    getGroups();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading === false ? (
        groups.length > 0 ? (
          <GroupList trending={true} {...props} />
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h3>No group found</Text>
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
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
});
