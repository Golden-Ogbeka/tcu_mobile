import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {Button, Icon, Input, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import * as Yup from 'yup';
import Axios from 'axios';
import {API_URL} from '../../../app.json';
import InputComponent from '../../layout/InputComponent';
import NigerianStates from '../../layout/NigerianStates';
import SelectComponent from '../../layout/SelectComponent';
import ButtonComponent from '../../layout/ButtonComponent';

export default function EditProducerProfile(props) {
  const {contextVariables, setContextVariables} = useAppContext();

  const updateProfile = async (values) => {
    try {
      const response = await Axios.post(
        `${API_URL}/api/updateProducerProfile`,
        values,
      );
      Alert.alert('Success', response.data);
      props.navigation.navigate('View Producer Profile');
      //Updated info isnt showing
    } catch (error) {
      Alert.alert('Error', error.response.data);
    }
  };
  return (
    <ScrollView contentContainerStyle>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Edit Producer Profile
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Formik
          initialValues={{
            brandName: contextVariables.user.brandName,
            brandEmail: contextVariables.user.brandEmail,
            brandNumber: contextVariables.user.brandNumber,
            brandState: contextVariables.user.brandState,
            brandAddress: contextVariables.user.brandAddress,
            brandDescription: contextVariables.user.brandDescription,
            brandMotto: contextVariables.user.brandMotto,
            brandVision: contextVariables.user.brandVision,
            brandDate: contextVariables.user.brandDate,
          }}
          enableReinitialize
          validationSchema={Yup.object({
            brandName: Yup.string().required("Brand's Name is required"),
            brandEmail: Yup.string().email('Invalid Email'),
            brandNumber: Yup.number().required('Invalid Phone Number'),
            brandState: Yup.string().required("Brand's State is required"),
            brandAddress: Yup.string().required("Brand's Address is required"),
            brandDescription: Yup.string().required(
              "Brand's Description is required",
            ),
            brandMotto: Yup.string(),
            brandVision: Yup.string(),
            brandDate: Yup.string(),
          })}
          onSubmit={(values) => updateProfile(values)}>
          {(props) => (
            <>
              <InputComponent
                label="Brand's Name"
                touched={props.touched.name}
                errors={props.errors.name}
                rightIcon={{name: 'user', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandName')}
                onBlur={props.handleBlur('brandName')}
                placeholder="Input your brand name"
                value={props.values.brandName}
              />
              <InputComponent
                label="Brand's Email"
                touched={props.touched.email}
                errors={props.errors.email}
                rightIcon={{name: 'envelope', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandEmail')}
                onBlur={props.handleBlur('brandEmail')}
                placeholder="Input your brand's email"
                value={props.values.brandEmail}
              />
              <InputComponent
                label="Brand's Number"
                touched={props.touched.name}
                errors={props.errors.name}
                rightIcon={{name: 'phone', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandNumber')}
                onBlur={props.handleBlur('brandNumber')}
                placeholder="Input your brand's number"
                value={props.values.brandNumber}
              />
              <SelectComponent
                title="State"
                value={props.values.brandState}
                searchable
                items={NigerianStates}
                onChangeItem={(item) => {
                  props.setFieldValue('brandState', item.value);
                }}
                touched={props.touched.brandState}
                errors={props.errors.brandState}
              />
              <InputComponent
                label="Brand's Address"
                touched={props.touched.brandAddress}
                errors={props.errors.brandAddress}
                rightIcon={{name: 'location-pin', size: 30}}
                onChangeText={props.handleChange('brandAddress')}
                onBlur={props.handleBlur('brandAddress')}
                placeholder="Input your brand's address'"
                value={props.values.brandAddress}
              />

              <InputComponent
                label="Brand's Description"
                touched={props.touched.brandDescription}
                errors={props.errors.brandDescription}
                rightIcon={{name: 'description', size: 30}}
                onChangeText={props.handleChange('brandDescription')}
                onBlur={props.handleBlur('brandDescription')}
                placeholder="Input your brand's description'"
                value={props.values.brandDescription}
              />

              <InputComponent
                label="Brand's Motto"
                touched={props.touched.brandMotto}
                errors={props.errors.brandMotto}
                rightIcon={{name: 'info', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandMotto')}
                onBlur={props.handleBlur('brandMotto')}
                placeholder="Input your brand's motto'"
                value={props.values.brandMotto}
              />

              <InputComponent
                label="Brand's Vision"
                touched={props.touched.brandVision}
                errors={props.errors.brandVision}
                rightIcon={{name: 'info', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandVision')}
                onBlur={props.handleBlur('brandVision')}
                placeholder="Input your brand's vision'"
                value={props.values.brandVision}
              />

              {/* Use Date Picker */}
              <InputComponent
                label="Brand's Founding Date"
                touched={props.touched.brandDate}
                errors={props.errors.brandDate}
                rightIcon={{name: 'calendar', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandDate')}
                onBlur={props.handleBlur('brandDate')}
                placeholder="Input your brand's founding date'"
                value={props.values.brandDate}
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
