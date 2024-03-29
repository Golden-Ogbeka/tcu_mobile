import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL} from '../../app.json';
import Axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import InputComponent from '../layout/InputComponent';
import CheckBoxComponent from '../layout/CheckBoxComponent';
import ButtonComponent from '../layout/ButtonComponent';

const logo = require('../../assets/images/logo/tcu.png');

export default function Register({navigation}) {
  const submitDetails = async (values) => {
    try {
      const response = await Axios.post(`${API_URL}/api/register`, values);
      Alert.alert(
        'Registration Successful',
        'Check your mail for your activation link',
      );
      return navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.response.data);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logoImage} />
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
        {(props) => (
          <>
            <InputComponent
              touched={props.touched.name}
              errors={props.errors.name}
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
              placeholder="Enter your full name"
              rightIcon={{
                name: 'user',
                type: 'font-awesome',
                size: 30,
                color: '#910000',
              }}
            />
            <InputComponent
              touched={props.touched.email}
              errors={props.errors.email}
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder="Enter your email"
              rightIcon={{
                name: 'envelope',
                type: 'font-awesome',
                color: '#910000',
              }}
            />
            <InputComponent
              touched={props.touched.password}
              errors={props.errors.password}
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              placeholder="Enter your password"
              rightIcon={{
                name: 'lock',
                type: 'font-awesome-5',
                color: '#910000',
              }}
              secureTextEntry
            />
            <InputComponent
              touched={props.touched.confirmPassword}
              errors={props.errors.confirmPassword}
              onChangeText={props.handleChange('confirmPassword')}
              onBlur={props.handleBlur('confirmPassword')}
              value={props.values.confirmPassword}
              placeholder="Re-enter your password"
              rightIcon={{
                name: 'lock',
                type: 'font-awesome-5',
                color: '#910000',
              }}
              secureTextEntry
            />
            <CheckBoxComponent
              title="I agree with the terms"
              checked={props.values.checked}
              touched={props.touched.checked}
              errors={props.errors.checked}
              onPress={() =>
                props.setFieldValue('checked', !props.values.checked)
              }
              onBlur={props.handleBlur('checked')}
            />

            <ButtonComponent
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
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logoImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
