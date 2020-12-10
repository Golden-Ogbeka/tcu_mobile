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
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid Email')
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}>
        {({values, ...props}) => (
          <>
            <Input
              placeholder="Enter your email"
              rightIcon={{name: 'envelope', type: 'font-awesome'}}
              value={values.email}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              style={styles.input}
            />
            {props.touched.email && props.errors.email && (
              <Text style={styles.errorText}>* {props.errors.email}</Text>
            )}
            <Input
              placeholder="Enter your password"
              secureTextEntry
              rightIcon={{name: 'lock', type: 'font-awesome-5'}}
              value={values.password}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              style={styles.input}
            />
            {props.touched.password && props.errors.password && (
              <Text style={styles.errorText}>* {props.errors.password}</Text>
            )}
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
  errorText: {
    color: '#910000',
    fontSize: 20,
    paddingBottom: 20,
  },
  input: {
    fontSize: 20,
  },
  logoImage: {
    width: 300,
    height: 300,
    borderRadius: 100,
    resizeMode: 'contain',
  },
});
