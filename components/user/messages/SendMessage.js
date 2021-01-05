import {Formik, yupToFormErrors} from 'formik';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';
import InputComponent from '../../layout/InputComponent';
import ButtonComponent from '../../layout/ButtonComponent';
import {Icon} from 'react-native-elements';
import LoadingIndicator from '../../layout/LoadingIndicator';
import {API_URL} from '../../../app.json';
import Axios from 'axios';
import {Alert} from 'react-native';

export default function SendMessage(props) {
  const {senderEmail, type, messageID, brand} = props.route.params;
  const [loading, setLoading] = useState(true);
  const [brandName, setBrandName] = useState('');

  useEffect(() => {
    const getSender = async () => {
      try {
        const response = await Axios.get(
          `${API_URL}/api/user?email=${senderEmail}`,
        );
        setBrandName(response.data.brandName);
        setLoading(false);
      } catch (error) {
        setBrandName('');
        setLoading(false);
      }
    };
    if (senderEmail) {
      getSender();
    }
    if (brand) {
      setBrandName(brand);
      setLoading(false);
    }
  }, []);

  const sendMessage = async (values) => {
    if (type === 'reply') {
      try {
        const response = await Axios.post(
          `${API_URL}/api/message/reply/${senderEmail}/${messageID}`,
          values,
        );
        Alert.alert(response.data);
        return props.navigation.goBack();
      } catch (error) {
        Alert.alert(error.response.data);
      }
    }
    if (type === 'send') {
      try {
        const response = await Axios.post(
          `${API_URL}/api/message/send/${brandName}`,
          values,
        );
        Alert.alert(response.data);
        return props.navigation.goBack();
      } catch (error) {
        Alert.alert(error.response.data);
      }
    }
  };

  return (
    <View style={styles.container}>
      {loading === false ? (
        <Formik
          initialValues={{
            brandName: `TO: ${brandName}`,
            message: '',
          }}
          enableReinitialize
          onSubmit={(values) => sendMessage(values)}
          validationSchema={Yup.object({
            message: Yup.string().required('Message is required'),
          })}>
          {(props) => (
            <>
              <InputComponent
                touched={props.touched.brandName}
                errors={props.errors.brandName}
                onChangeText={props.handleChange('brandName')}
                onBlur={props.handleBlur('brandName')}
                value={props.values.brandName}
                disabled
              />
              <InputComponent
                touched={props.touched.message}
                errors={props.errors.message}
                onChangeText={props.handleChange('message')}
                onBlur={props.handleBlur('message')}
                value={props.values.message}
                placeholder="Enter your message"
                multiline
              />
              <ButtonComponent
                title="SEND"
                raised
                icon={
                  <Icon
                    name="send"
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
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
