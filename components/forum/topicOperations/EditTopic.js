import {Formik} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';
import ButtonComponent from '../../layout/ButtonComponent';
import InputComponent from '../../layout/InputComponent';
import SelectComponent from '../../layout/SelectComponent';
import {API_URL} from '../../../app.json';
import {Alert} from 'react-native';
import Axios from 'axios';

export default function EditTopic(props) {
  const {topic} = props.route.params;

  const updateTopic = async (values) => {
    try {
      const response = await Axios.put(
        `${API_URL}/api/forum/topic/${_id}`,
        values,
      );
      Alert.alert(response.data);
      return props.navigation.push('View Topic', {topicID: topic._id});
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };
  return (
    <ScrollView>
      <Formik
        initialValues={{
          topic: topic.topic,
          section: topic.section,
          content: topic.content,
          // Attachment: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          topic: Yup.string().required('Topic is required'),
          section: Yup.string().required("Topic's section is required"),
          content: Yup.string().required("Topic's content is required"),
          // attachment: Yup.
        })}
        onSubmit={(values) => updateTopic(values)}>
        {(props) => (
          <View style={styles.inputContainer}>
            <InputComponent
              label="Topic"
              touched={props.touched.topic}
              errors={props.errors.topic}
              onChangeText={props.handleChange('topic')}
              onBlur={props.handleBlur('topic')}
              value={props.values.topic}
              placeholder="Input the topic"
            />
            <SelectComponent
              title="Section"
              value={props.values.section}
              items={[
                'Poultry',
                'Food',
                'Equipment',
                'Training',
                'Medication',
                'Contact',
              ]}
              onChangeItem={(item) => {
                props.setFieldValue('section', item.value);
              }}
              touched={props.touched.section}
              errors={props.errors.section}
            />
            <InputComponent
              label="Content"
              multiline
              touched={props.touched.content}
              errors={props.errors.content}
              onChangeText={props.handleChange('content')}
              onBlur={props.handleBlur('content')}
              value={props.values.content}
              placeholder="Input the topic's content"
            />
            <ButtonComponent
              title="Update Topic"
              raised
              icon={{
                name: 'save',
                color: 'white',
                size: 18,
              }}
              iconContainerStyle={{paddingRight: 10}}
              onPress={props.handleSubmit}
              disabled={!props.isValid}
              loading={props.isSubmitting}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
