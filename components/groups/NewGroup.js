import {Formik} from 'formik';
import React from 'react';
import {AppState, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import * as Yup from 'yup';

export default function NewGroup() {
  const createGroup = async (values) => {};
  return (
    <ScrollView>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Create new Group
        </Text>
      </View>
      <Formik
        initialValues={{
          name: '',
          type: '',
          description: '',
          rules: '',
          // Group'sImage: '',
        }}
        enableReinitialize
        validationSchema={Yup.object({
          name: Yup.string().required("Group's name is required"),
          type: Yup.string().required("Group's type is required"),
          description: Yup.string().required("Group's description is required"),
          rules: Yup.number().required("Group's rules is required"),
          // image: Yup.
        })}
        onSubmit={(values) => createGroup(values)}>
        {(props) => (
          <View style={styles.inputContainer}>
            <Input
              label="Group's Name"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              placeholder="Input the Group's name"
              value={props.values.name}
            />
            {props.touched.name && props.errors.name && (
              <Text style={styles.errorText}>* {props.errors.name}</Text>
            )}
            <Input
              label="Group's Type"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('type')}
              onBlur={props.handleBlur('type')}
              placeholder="Input the Group's type"
              value={props.values.type}
            />
            {props.touched.type && props.errors.type && (
              <Text style={styles.errorText}>* {props.errors.type}</Text>
            )}
            <Input
              label="Group's Description"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('description')}
              onBlur={props.handleBlur('description')}
              placeholder="Input the Group's description"
              value={props.values.description}
            />
            {props.touched.description && props.errors.description && (
              <Text style={styles.errorText}>* {props.errors.description}</Text>
            )}
            <Input
              label="Group's Rules"
              style={styles.textInput}
              labelStyle={styles.textLabel}
              onChangeText={props.handleChange('rules')}
              onBlur={props.handleBlur('rules')}
              placeholder="Input the Group's rules"
              value={props.values.rules}
            />
            {props.touched.rules && props.errors.rules && (
              <Text style={styles.errorText}>* {props.errors.rules}</Text>
            )}
            {/* Group's Image */}

            <Button
              title="Create Group"
              raised
              titleStyle={{fontSize: 18}}
              icon={
                <Icon
                  name="plus"
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
