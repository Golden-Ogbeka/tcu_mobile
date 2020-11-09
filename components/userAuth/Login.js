import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// const logo = {uri: 'https://picsum.photos/200'};
const logo = require('../../assets/logo/tcu.png');

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });
  const submitDetails = async () => {
    console.log(userDetails);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{position: 'relative', top: 0, alignItems: 'center'}}>
        <Text h1>User Login</Text>
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
      <Button
        title="LOGIN"
        raised
        icon={
          <Icon
            name="sign-in"
            size={15}
            color="white"
            style={{paddingLeft: 10}}
          />
        }
        iconRight
        buttonStyle={{backgroundColor: 'red', height: 50, width: 150}}
        onPress={() => submitDetails()}
      />
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
