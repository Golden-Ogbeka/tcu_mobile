import {Formik} from 'formik';
import React from 'react';
import {AppState, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import * as Yup from 'yup';

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
            <Input
              label="Topic"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('topic')}
              onBlur={props.handleBlur('topic')}
              placeholder="Input the Topic"
              value={props.values.topic}
            />
            {props.touched.topic && props.errors.topic && (
              <Text style={styles.errorText}>* {props.errors.topic}</Text>
            )}
            <Input
              label="Topic's Section"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('section')}
              onBlur={props.handleBlur('section')}
              placeholder="Input the Topic's section"
              value={props.values.section}
            />
            {props.touched.section && props.errors.section && (
              <Text style={styles.errorText}>* {props.errors.section}</Text>
            )}
            <Input
              multiline
              label="Content"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('content')}
              onBlur={props.handleBlur('content')}
              placeholder="Input the Topic's content"
              value={props.values.content}
            />
            {props.touched.content && props.errors.content && (
              <Text style={styles.errorText}>* {props.errors.content}</Text>
            )}

            <Button
              title="Create Topic"
              raised
              titleStyle={{fontSize: 18}}
              icon={{
                name: 'plus',
                type: 'font-awesome-5',
                color: 'white',
                size: 18,
              }}
              iconContainerStyle={{paddingRight: 10}}
              buttonStyle={{
                backgroundColor: '#910000',
                height: 50,
                width: 200,
              }}
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
