import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {Button, Icon, Input, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import * as Yup from 'yup';
import Axios from 'axios';
import {API_URL} from '../../../app.json';

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
            name: Yup.string().required("Brand's Name is required"),
            email: Yup.string().email('Invalid Email'),
            phoneNumber: Yup.number().required('Invalid Phone Number'),
            state: Yup.string().required("Brand's State is required"),
            address: Yup.string().required("Brand's Address is required"),
            gender: Yup.string().required("Brand's Description is required"),
          })}
          onSubmit={(values) => updateProfile(values)}>
          {(props) => (
            <>
              <Input
                label="Full Name"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'user', type: 'font-awesome'}}
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                placeholder="Input your full name"
                value={props.values.name}
              />
              {props.touched.name && props.errors.name && (
                <Text style={styles.errorText}>* {props.errors.name}</Text>
              )}
              <Input
                label="Phone Number"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'envelope', type: 'font-awesome'}}
                onChangeText={props.handleChange('phoneNumber')}
                onBlur={props.handleBlur('phoneNumber')}
                placeholder="Input your phone number"
                value={props.values.phoneNumber}
              />
              {props.touched.phoneNumber && props.errors.phoneNumber && (
                <Text style={styles.errorText}>
                  * {props.errors.phoneNumber}
                </Text>
              )}
              <Input
                label="State"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'list', type: 'font-awesome'}}
                onChangeText={props.handleChange('state')}
                onBlur={props.handleBlur('state')}
                placeholder="Input your state'"
                value={props.values.state}
              />
              {props.touched.state && props.errors.state && (
                <Text style={styles.errorText}>* {props.errors.state}</Text>
              )}
              <Input
                label="Address"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'list', type: 'font-awesome'}}
                onChangeText={props.handleChange('address')}
                onBlur={props.handleBlur('address')}
                placeholder="Input your address'"
                value={props.values.address}
              />
              {props.touched.address && props.errors.address && (
                <Text style={styles.errorText}>* {props.errors.address}</Text>
              )}
              <Input
                label="Gender"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'users', type: 'font-awesome'}}
                onChangeText={props.handleChange('gender')}
                onBlur={props.handleBlur('gender')}
                placeholder="Input your gender"
                value={props.values.gender}
              />
              {props.touched.gender && props.errors.gender && (
                <Text style={styles.errorText}>* {props.errors.gender}</Text>
              )}

              <Button
                title="Update Profile"
                raised
                titleStyle={{fontSize: 18}}
                icon={
                  <Icon
                    name="pen"
                    type="font-awesome-5"
                    size={18}
                    color="white"
                    style={{paddingRight: 10}}
                  />
                }
                buttonStyle={{
                  backgroundColor: '#910000',
                  height: 50,
                  width: 200,
                }}
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
