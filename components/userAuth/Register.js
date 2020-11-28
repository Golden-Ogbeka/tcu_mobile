import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_URL} from '../../app.json';
import Axios from 'axios';

const logo = require('../../assets/images/logo/tcu.png');

export default function Register({navigation}) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checked: false,
  });
  const [loading, setLoading] = useState(false);
  const submitDetails = async () => {
    try {
      setLoading(true);
      const response = await Axios.post(`${API_URL}/api/register`, userDetails);
      Alert.alert('Success', response.data);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', error.response.data);
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
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
          placeholder="Enter your full name"
          rightIcon={{name: 'user', type: 'font-awesome'}}
          value={userDetails.name}
          onChangeText={(text) => setUserDetails({...userDetails, name: text})}
        />
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
        <Input
          placeholder="Enter your password again"
          secureTextEntry={true}
          rightIcon={{name: 'lock', type: 'font-awesome'}}
          value={userDetails.confirmPassword}
          onChangeText={(text) =>
            setUserDetails({...userDetails, confirmPassword: text})
          }
        />
        <CheckBox
          title="I agree with the terms"
          checked={userDetails.checked}
          onPress={() =>
            setUserDetails({...userDetails, checked: !userDetails.checked})
          }
        />
        {loading ? (
          <ActivityIndicator size="large" color="#910000" />
        ) : (
          <Button
            title="REGISTER"
            raised
            icon={
              <Icon
                name="user"
                size={20}
                color="white"
                style={{paddingLeft: 10}}
              />
            }
            iconRight
            titleStyle={{fontSize: 20}}
            buttonStyle={{backgroundColor: '#910000', height: 50, width: 150}}
            onPress={() => submitDetails()}
          />
        )}

        <Text
          style={{fontSize: 18, marginTop: 20, color: 'grey'}}
          onPress={() => navigation.navigate('Login')}>
          Already Registered? Login here
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
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
    margin: 0,
    padding: 0,
  },
});
