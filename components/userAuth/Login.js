import Axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '../../app.json';

const logo = require('../../assets/images/logo/tcu.png');

export default function Login({navigation}) {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const submitDetails = async () => {
    try {
      setLoading(true);
      const response = await Axios.post(`${API_URL}/api/login`, userDetails);
      Alert.alert('Success', 'Logged in');
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', error.response.data);
      setLoading(false);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{position: 'relative', top: 0, alignItems: 'center'}}>
        <Image
          // resizeMode="contain"
          source={logo}
          style={styles.logoImage}
          // PlaceholderContent={<ActivityIndicator color="red" size="large" />}
          // placeholderStyle={{
          //   backgroundColor: 'black',
          // }}
        />
      </View>
      <Input
        placeholder="Enter your email"
        rightIcon={{name: 'envelope', type: 'font-awesome'}}
        value={userDetails.email}
        onChangeText={(text) => setUserDetails({...userDetails, email: text})}
      />
      <Input
        placeholder="Enter your password"
        secureTextEntry={true}
        rightIcon={{name: 'lock', type: 'font-awesome'}}
        value={userDetails.password}
        onChangeText={(text) =>
          setUserDetails({...userDetails, password: text})
        }
      />
      {loading ? (
        <ActivityIndicator color="#910000" size="large" />
      ) : (
        <Button
          title="LOGIN"
          raised
          titleStyle={{fontSize: 18}}
          icon={
            <Icon
              name="sign-in"
              size={18}
              color="white"
              style={{paddingLeft: 10}}
            />
          }
          iconRight
          buttonStyle={{backgroundColor: '#910000', height: 50, width: 150}}
          onPress={() => submitDetails()}
        />
      )}

      <Text
        style={{fontSize: 18, marginTop: 20, color: 'grey'}}
        onPress={() => navigation.navigate('Register')}>
        Not registered? Login Here
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'grey',
    fontSize: 20,
    width: 300,
  },
  logoImage: {
    width: 300,
    height: 300,
    borderRadius: 100,
    resizeMode: 'contain',
  },
});
