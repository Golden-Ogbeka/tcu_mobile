import Axios from 'axios';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {API_URL} from '../../app.json';
import {useAppContext} from '../../context/AppContext';

export default function Logout(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  const logoutFunction = async () => {
    try {
      const response = await Axios.get(`${API_URL}/api/logout`);
      Alert.alert('Logout Successful', response.data);
      setContextVariables({
        ...contextVariables,
        loggedIn: false,
        user: {},
      });
      props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.response.data);
    }
  };
  return (
    <View style={styles.container}>
      <Text h4>Are you sure you want to logout?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Yes"
          icon={
            <Icon raised name="check" type="font-awesome" color="#910000" />
          }
          onPress={() => logoutFunction()}
          type="clear"
          titleStyle={{color: '#910000', fontSize: 22}}
        />
        <Button
          title="No"
          icon={
            <Icon raised name="times" type="font-awesome" color="#910000" />
          }
          onPress={() => props.navigation.navigate('Products')}
          //   Navigate to home page
          type="clear"
          titleStyle={{color: '#910000', fontSize: 22}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
