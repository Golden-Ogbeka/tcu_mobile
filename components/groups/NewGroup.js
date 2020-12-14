import {Formik} from 'formik';
import React from 'react';
import {AppState, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text, Input, Icon} from 'react-native-elements';
import * as Yup from 'yup';
import ButtonComponent from '../layout/ButtonComponent';
import InputComponent from '../layout/InputComponent';
import SelectComponent from '../layout/SelectComponent';

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
            <InputComponent
              label="Group's Name"
              touched={props.touched.name}
              errors={props.errors.name}
              onChangeText={props.handleChange('phoneNumber')}
              onBlur={props.handleBlur('phoneNumber')}
              value={props.values.name}
              placeholder="Input the Group's name"
            />
            <SelectComponent
              title="Group's Type"
              value={props.values.type}
              items={['Public', 'Private']}
              onChangeItem={(item) => {
                props.setFieldValue('type', item.value);
              }}
              touched={props.touched.type}
              errors={props.errors.type}
            />
            <InputComponent
              label="Group's Description"
              multiline
              touched={props.touched.description}
              errors={props.errors.description}
              onChangeText={props.handleChange('phoneNumber')}
              onBlur={props.handleBlur('phoneNumber')}
              value={props.values.description}
              placeholder="Input the Group's description"
            />
            <InputComponent
              label="Group's Rules"
              multiline
              touched={props.touched.rules}
              errors={props.errors.rules}
              onChangeText={props.handleChange('phoneNumber')}
              onBlur={props.handleBlur('phoneNumber')}
              value={props.values.rules}
              placeholder="Input the Group's rules"
            />

            {/* Group's Image */}

            <ButtonComponent
              title="Create Group"
              raised
              icon={
                <Icon
                  name="plus"
                  type="font-awesome-5"
                  size={18}
                  color="white"
                  style={{paddingRight: 10}}
                />
              }
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
