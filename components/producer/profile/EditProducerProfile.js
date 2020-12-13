import React from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {Button, Icon, Input, Text} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import * as Yup from 'yup';
import Axios from 'axios';
import {API_URL} from '../../../app.json';

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
              <Input
                label="Brand's Name"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'user', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandName')}
                onBlur={props.handleBlur('brandName')}
                placeholder="Input your brand name"
                value={props.values.brandName}
              />
              {props.touched.brandName && props.errors.brandName && (
                <Text style={styles.errorText}>* {props.errors.brandName}</Text>
              )}
              <Input
                label="Brand's Email"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'envelope', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandEmail')}
                onBlur={props.handleBlur('brandEmail')}
                placeholder="Input your brand's email"
                value={props.values.brandEmail}
              />
              {props.touched.brandEmail && props.errors.brandEmail && (
                <Text style={styles.errorText}>
                  * {props.errors.brandEmail}
                </Text>
              )}
              <Input
                label="Brand's Number"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'phone', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandNumber')}
                onBlur={props.handleBlur('brandNumber')}
                placeholder="Input your brand's number"
                value={props.values.brandNumber}
              />
              {props.touched.brandNumber && props.errors.brandNumber && (
                <Text style={styles.errorText}>
                  * {props.errors.brandNumber}
                </Text>
              )}
              <Input
                label="Brand's State"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'list', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandState')}
                onBlur={props.handleBlur('brandState')}
                placeholder="Input your brand's state'"
                value={props.values.brandState}
              />
              {props.touched.brandState && props.errors.brandState && (
                <Text style={styles.errorText}>
                  * {props.errors.brandState}
                </Text>
              )}
              <Input
                label="Brand's Address"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'list', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandAddress')}
                onBlur={props.handleBlur('brandAddress')}
                placeholder="Input your brand's address'"
                value={props.values.brandAddress}
              />
              {props.touched.brandAddress && props.errors.brandAddress && (
                <Text style={styles.errorText}>
                  * {props.errors.brandAddress}
                </Text>
              )}
              <Input
                label="Brand's Description"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'info', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandDescription')}
                onBlur={props.handleBlur('brandDescription')}
                placeholder="Input your brand's description'"
                value={props.values.brandDescription}
              />
              {props.touched.brandDescription &&
                props.errors.brandDescription && (
                  <Text style={styles.errorText}>
                    * {props.errors.brandDescription}
                  </Text>
                )}
              <Input
                label="Brand's Motto"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'info', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandMotto')}
                onBlur={props.handleBlur('brandMotto')}
                placeholder="Input your brand's motto'"
                value={props.values.brandMotto}
              />
              {props.touched.brandMotto && props.errors.brandMotto && (
                <Text style={styles.errorText}>
                  * {props.errors.brandMotto}
                </Text>
              )}
              <Input
                label="Brand's Vision"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'info', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandVision')}
                onBlur={props.handleBlur('brandVision')}
                placeholder="Input your brand's vision'"
                value={props.values.brandVision}
              />
              {props.touched.brandVision && props.errors.brandVision && (
                <Text style={styles.errorText}>
                  * {props.errors.brandVision}
                </Text>
              )}
              <Input
                label="Brand's Founding Date"
                style={styles.textInput}
                labelStyle={styles.textLabel}
                rightIcon={{name: 'info', type: 'font-awesome'}}
                onChangeText={props.handleChange('brandDate')}
                onBlur={props.handleBlur('brandDate')}
                placeholder="Input your brand's founding date'"
                value={props.values.brandDate}
              />
              {props.touched.brandDate && props.errors.brandDate && (
                <Text style={styles.errorText}>* {props.errors.brandDate}</Text>
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
