import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
            <Text style={styles.statLabel}>Groups:</Text>
            <Text style={styles.statLabel}>{userStats.groups}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statLabel}>Forums: </Text>
            <Text style={styles.statLabel}>{userStats.forums}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statLabel}>Products: </Text>
            <Text style={styles.statLabel}>{userStats.products}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statLabel}>Products' Views: </Text>
            <Text style={styles.statLabel}>{userStats.productViews}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statLabel}>Brand's Views: </Text>
            <Text style={styles.statLabel}>
              {contextVariables.user.brandClicks}
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statLabel}>Messages: </Text>
            <Text style={styles.statLabel}>{userStats.messages}</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statLabel}>Date of Registration: </Text>
            <Text style={styles.statLabel}>
              {contextVariables.user.Created}
            </Text>
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
  statLabel: {
    fontSize: 30,
  },
});
