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
import {Formik} from 'formik';
import * as Yup from 'yup';

const logo = require('../../assets/images/logo/tcu.png');

export default function Register({navigation}) {
  const submitDetails = async (values) => {
    try {
      const response = await Axios.post(`${API_URL}/api/register`, values);
      Alert.alert('Success', response.data);
    } catch (error) {
      Alert.alert('Error', error.response.data);
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
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            checked: false,
          }}
          onSubmit={(values) => submitDetails(values)}
          validationSchema={Yup.object({
            name: Yup.string().required('Input your full name'),
            email: Yup.string()
              .email('Invalid Email')
              .required('Input your email'),
            password: Yup.string().required('Input your password'),
            confirmPassword: Yup.string()
              .required('Input your password again')
              .oneOf([Yup.ref('password')], "Passwords don't match"),
            checked: Yup.boolean().oneOf(
              [true],
              'You are required to agree with the terms',
            ),
          })}>
          {({values, ...props}) => (
            <>
              <Input
                placeholder="Enter your full name"
                rightIcon={{name: 'user', type: 'font-awesome', size: 30}}
                value={values.name}
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                style={styles.input}
              />
              {props.touched.name && props.errors.name && (
                <Text style={styles.errorText}>{props.errors.name}</Text>
              )}
              <Input
                placeholder="Enter your email"
                rightIcon={{name: 'envelope', type: 'font-awesome'}}
                value={values.email}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                style={styles.input}
              />
              {props.touched.email && props.errors.email && (
                <Text style={styles.errorText}>{props.errors.email}</Text>
              )}
              <Input
                placeholder="Enter your password"
                secureTextEntry={true}
                rightIcon={{name: 'lock', type: 'font-awesome'}}
                value={values.password}
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                style={styles.input}
              />
              {props.touched.password && props.errors.password && (
                <Text style={styles.errorText}>{props.errors.password}</Text>
              )}
              <Input
                placeholder="Enter your password again"
                secureTextEntry={true}
                rightIcon={{name: 'lock', type: 'font-awesome'}}
                value={values.confirmPassword}
                onChangeText={props.handleChange('confirmPassword')}
                onBlur={props.handleBlur('confirmPassword')}
                style={styles.input}
              />
              {props.touched.confirmPassword &&
                props.errors.confirmPassword && (
                  <Text style={styles.errorText}>
                    {props.errors.confirmPassword}
                  </Text>
                )}
              <CheckBox
                title="I agree with the terms"
                checked={values.checked}
                onPress={() => props.setFieldValue('checked', !values.checked)}
                onBlur={props.handleBlur('checked')}
                style={styles.input}
              />
              {props.touched.checked && props.errors.checked && (
                <Text style={styles.errorText}>{props.errors.checked}</Text>
              )}
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
                buttonStyle={{
                  backgroundColor: '#910000',
                  height: 50,
                  width: 150,
                }}
                onPress={props.handleSubmit}
                disabled={!props.isValid}
                loading={props.isSubmitting}
              />
            </>
          )}
        </Formik>

        <Text
          style={{fontSize: 22, marginTop: 20, color: 'grey'}}
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
    paddingBottom: 20,
  },
  input: {
    fontSize: 20,
  },
  errorText: {
    color: '#910000',
    paddingBottom: 20,
    fontSize: 20,
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
