import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {Button, Icon, Input, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import * as Yup from 'yup';
import Axios from 'axios';
import {API_URL} from '../../../app.json';
import InputComponent from '../../layout/InputComponent';
import SelectComponent from '../../layout/SelectComponent';
import NigerianStates from '../../layout/NigerianStates';
import ButtonComponent from '../../layout/ButtonComponent';

export default function EditUserProfile(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  const updateProfile = async (values) => {
    try {
      const response = await Axios.post(
        `${API_URL}/api/updateUserProfile`,
        values,
      );
      Alert.alert('Success', response.data);
      props.navigation.navigate('View User Profile');
      //Updated info isnt showing
    } catch (error) {
      Alert.alert('Error', error.response.data);
    }
  };
  return (
    <ScrollView contentContainerStyle>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Edit User Profile
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Formik
          initialValues={{
            name: contextVariables.user.name,
            email: contextVariables.user.email,
            phoneNumber: contextVariables.user.phoneNumber,
            gender: contextVariables.user.gender,
            state: contextVariables.user.state,
            address: contextVariables.user.address,
          }}
          enableReinitialize
          validationSchema={Yup.object({
            name: Yup.string().required('Your full name is required'),
            email: Yup.string().email('Invalid Email'),
            phoneNumber: Yup.number().required('Invalid Phone Number'),
            state: Yup.string().required('State is required'),
            address: Yup.string().required('Address is required'),
            gender: Yup.string().required('Gender is required'),
          })}
          onSubmit={(values) => updateProfile(values)}>
          {(props) => (
            <>
              <InputComponent
                label="Full Name"
                touched={props.touched.name}
                errors={props.errors.name}
                rightIcon={{name: 'user', type: 'font-awesome', size: 30}}
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                placeholder="Input your full name"
              />
              <SelectComponent
                title="State"
                searchable
                value={props.values.state}
                items={NigerianStates}
                onChangeItem={(item) => {
                  props.setFieldValue('state', item.value);
                }}
                touched={props.touched.state}
                errors={props.errors.state}
              />
              <InputComponent
                label="Phone Number"
                touched={props.touched.phoneNumber}
                errors={props.errors.phoneNumber}
                keyboardType="numeric"
                rightIcon={{name: 'phone', type: 'font-awesome-5'}}
                onChangeText={props.handleChange('phoneNumber')}
                onBlur={props.handleBlur('phoneNumber')}
                placeholder="Input your phone number"
                value={props.values.phoneNumber}
              />
              <SelectComponent
                title="Gender"
                value={props.values.gender}
                items={['Male', 'Female']}
                onChangeItem={(item) => {
                  props.setFieldValue('gender', item.value);
                }}
                touched={props.touched.gender}
                errors={props.errors.gender}
              />

              <InputComponent
                label="Address"
                multiline
                touched={props.touched.address}
                errors={props.errors.address}
                rightIcon={{name: 'location-pin', size: 40}}
                onChangeText={props.handleChange('address')}
                onBlur={props.handleBlur('address')}
                placeholder="Input your address'"
                value={props.values.address}
              />

              <ButtonComponent
                title="Update Profile"
                icon={
                  <Icon
                    name="save"
                    type="font-awesome-5"
                    size={25}
                    color="white"
                    style={{paddingRight: 10}}
                  />
                }
                onPress={props.handleSubmit}
                disabled={!props.isValid}
                loading={props.isSubmitting}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: '#910000',
    fontSize: 20,
    paddingBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  textInput: {
    fontSize: 23,
  },
  textLabel: {
    color: '#910000',
    fontSize: 20,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
});
