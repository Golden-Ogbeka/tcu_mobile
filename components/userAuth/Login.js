import Axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '../../app.json';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useAppContext} from '../../context/AppContext';
import InputComponent from '../layout/InputComponent';
import ButtonComponent from '../layout/ButtonComponent';

const logo = require('../../assets/images/logo/tcu.png');

export default function Login({navigation}) {
  const {contextVariables, setContextVariables} = useAppContext();
  const submitDetails = async (values) => {
    try {
      const response = await Axios.post(`${API_URL}/api/login`, values);
      Alert.alert('Success', 'Logged in');
      setContextVariables({
        ...contextVariables,
        loggedIn: true,
        user: response.data,
      });
      return navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.response.data);
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
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => submitDetails(values)}
        enableReinitialize
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid Email')
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}>
        {(props) => (
          <>
            <InputComponent
              touched={props.touched.email}
              errors={props.errors.email}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder="Enter your email"
              rightIcon={{name: 'envelope', type: 'font-awesome'}}
            />
            <InputComponent
              touched={props.touched.password}
              errors={props.errors.password}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              placeholder="Enter your password"
              rightIcon={{name: 'lock', type: 'font-awesome-5'}}
              secureTextEntry
            />
            <ButtonComponent
              title="LOGIN"
              raised
              icon={
                <Icon
                  name="sign-in"
                  size={18}
                  color="white"
                  style={{paddingLeft: 10}}
                />
              }
              iconRight
              onPress={props.handleSubmit}
              disabled={!props.isValid}
              loading={props.isSubmitting}
            />
          </>
        )}
      </Formik>
      <Text
        style={{fontSize: 22, marginTop: 20, color: 'grey'}}
        onPress={() => navigation.navigate('Register')}>
        Not registered? Register Here
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 300,
    height: 300,
    borderRadius: 100,
    resizeMode: 'contain',
  },
});
