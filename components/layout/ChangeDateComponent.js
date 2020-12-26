import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import {API_URL} from '../../app.json';
import LoadingIndicator from './LoadingIndicator';
import {Button, Text} from 'react-native-elements';
import ButtonComponent from './ButtonComponent';
import {Alert} from 'react-native';

export default function ChangeDateComponent(props) {
  const [userDetails, setUserDetails] = useState({});
  const {dateType} = props.route.params;
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getBrandDate = async () => {
      try {
        const response = await Axios.get(`${API_URL}/api/user`);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        setUserDetails({});
        setLoading(false);
      }
    };
    if (dateType === 'brandDate') {
      getBrandDate();
    }
  }, []);

  const saveDate = async () => {
    if (dateType === 'brandDate') {
      try {
        const response = await Axios.post(
          `${API_URL}/api/updateProducerProfile`,
          userDetails,
        );
        Alert.alert(response.data);
        return props.navigation.navigate('View Producer Profile');
      } catch (error) {
        Alert.alert(error.response.data);
      }
    }
  };
  return (
    <View style={styles.container}>
      {loading === false ? (
        <>
          <View style={styles.elementContainer}>
            <Text h3>
              Date:{' '}
              {userDetails.brandDate &&
                new Date(userDetails.brandDate).toDateString()}
            </Text>
          </View>
          <View style={styles.elementContainer}>
            <ButtonComponent
              onPress={() => setShow(true)}
              title="Change Date"
              icon={{name: 'edit', color: 'white', style: {paddingRight: 10}}}
            />
          </View>
          {show && (
            <DateTimePicker
              value={new Date(userDetails.brandDate)}
              onChange={(event, selectedDate) => {
                setShow(false);
                setUserDetails({...userDetails, brandDate: selectedDate});
              }}
            />
          )}
          <View style={styles.elementContainer}>
            <ButtonComponent
              title="Save"
              onPress={() => saveDate()}
              icon={{name: 'save', color: 'white', style: {paddingRight: 10}}}
            />
          </View>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  elementContainer: {
    paddingBottom: 20,
  },
});
