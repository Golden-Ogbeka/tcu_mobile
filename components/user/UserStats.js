import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text, ListItem} from 'react-native-elements';
import {useAppContext} from '../../context/AppContext';
import {API_URL} from '../../app.json';
import Axios from 'axios';
import LoadingIndicator from '../layout/LoadingIndicator';

export default function UserStats(props) {
  const [userStats, setUserStats] = useState({
    groups: 0,
    forums: 0,
    products: 0,
    productViews: 0,
    messages: 0,
  });
  const {contextVariables, setContextVariables} = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        setLoading(true);
        const groups = await Axios.get(`${API_URL}/api/groups/user`);
        const forums = await Axios.get(
          `${API_URL}/api/topics/?brandName=${contextVariables.user.brandName}`,
        );
        const products = await Axios.get(`${API_URL}/api/producerProducts`);
        const messages = await Axios.get(`${API_URL}/api/messages`);
        setUserStats({
          ...userStats,
          groups: groups.data.length,
          forums: forums.data.length,
          products: products.data.length,
          productViews: products.data.reduce(
            (previous, current) => previous + current.clicks,
            0,
          ),
          messages: messages.data.messages.length,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getUserStats();
  }, []);
  return (
    <ScrollView>
      {loading === false ? (
        <>
          <View style={styles.statsContainer}>
            <Text h2>Groups:</Text>
            <Text h2>{userStats.groups}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text h2>Forums: </Text>
            <Text h2>{userStats.forums}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text h2>Products: </Text>
            <Text h2>{userStats.products}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text h2>Products' Views: </Text>
            <Text h2>{userStats.productViews}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text h2>Brand's Views: </Text>
            <Text h2>{contextVariables.user.brandClicks}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text h2>Messages: </Text>
            <Text h2>{userStats.messages}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text h3>Date of Registration: </Text>
            <Text h3>{contextVariables.user.Created}</Text>
          </View>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    padding: 10,
    flexWrap: 'wrap',
  },
});
