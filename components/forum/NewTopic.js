import {Formik} from 'formik';
import React from 'react';
import {AppState, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import * as Yup from 'yup';
import ButtonComponent from '../layout/ButtonComponent';
import InputComponent from '../layout/InputComponent';
import SelectComponent from '../layout/SelectComponent';

export default function NewTopic() {
  const createTopic = async (values) => {
    console.log(values);
  };
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Create new topic
        </Text>
      </View>
      <Formik
        initialValues={{
          topic: '',
          section: '',
          content: '',
          // Attachment: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          topic: Yup.string().required('Topic is required'),
          section: Yup.string().required("Topic's section is required"),
          content: Yup.string().required("Topic's content is required"),
          // attachment: Yup.
        })}
        onSubmit={(values) => createTopic(values)}>
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
              title="Create Topic"
              raised
              icon={{
                name: 'plus',
                type: 'font-awesome-5',
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

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    padding: 10,
  },
  errorText: {
    color: '#910000',
    fontSize: 20,
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
