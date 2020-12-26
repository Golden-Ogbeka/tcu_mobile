import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {Button, Icon, Input, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import * as Yup from 'yup';
import Axios from 'axios';
import {API_URL} from '../../../app.json';
import InputComponent from '../../layout/InputComponent';
import ButtonComponent from '../../layout/ButtonComponent';
import SelectComponent from '../../layout/SelectComponent';
import NigerianStates from '../../layout/NigerianStates';

export default function EditForumProfile(props) {
  const {contextVariables, setContextVariables} = useAppContext();

  const updateProfile = async (values) => {
    try {
      const response = await Axios.post(
        `${API_URL}/api/updateForumProfile`,
        values,
      );
      Alert.alert('Success', response.data);
      props.navigation.navigate('View Forum Profile');
      //Updated info isnt showing
    } catch (error) {
      Alert.alert('Error', error.response.data);
    }
  };
  return (
    <ScrollView contentContainerStyle>
      <View style={styles.profileContainer}>
        <Formik
          initialValues={{
            brandName: contextVariables.user.brandName,
            state: contextVariables.user.state,
            address: contextVariables.user.address,
          }}
          enableReinitialize
          validationSchema={Yup.object({
            brandName: Yup.string().required('Brand Name is required'),
            state: Yup.string().required('State is required'),
            address: Yup.string().required('Address is required'),
          })}
          onSubmit={(values) => updateProfile(values)}>
          {(props) => (
            <>
              <InputComponent
                label="Brand's Name"
                touched={props.touched.brandName}
                errors={props.errors.brandName}
                rightIcon={{name: 'user', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandName')}
                onBlur={props.handleBlur('brandName')}
                placeholder="Input your brand's name"
                value={props.values.brandName}
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
                label="Address"
                multiline
                touched={props.touched.address}
                errors={props.errors.address}
                rightIcon={{name: 'location-pin', size: 25}}
                onChangeText={props.handleChange('address')}
                onBlur={props.handleBlur('address')}
                placeholder="Input your address"
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
