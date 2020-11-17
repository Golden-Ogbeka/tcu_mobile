import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

const logo = require('../../assets/images/logo/tcu.png');

export default function Register({navigation}) {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    checked: false,
  });
  const submitDetails = async () => {
    console.log(userDetails);
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
          value={userDetails.password2}
          onChangeText={(text) =>
            setUserDetails({...userDetails, password2: text})
          }
        />
        <CheckBox
          title="I agree with the terms"
          checked={userDetails.checked}
          onPress={() =>
            setUserDetails({...userDetails, checked: !userDetails.checked})
          }
        />
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
          buttonStyle={{backgroundColor: 'red', height: 50, width: 150}}
          onPress={() => submitDetails()}
        />
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
