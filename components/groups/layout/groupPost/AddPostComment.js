import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API_URL} from '../../../../app.json';
import * as Yup from 'yup';
import InputComponent from '../../../layout/InputComponent';
import ButtonComponent from '../../../layout/ButtonComponent';
import {Icon} from 'react-native-elements';
import {Alert} from 'react-native';
import Axios from 'axios';

export default function AddPostComment(props) {
  const {groupID, postID} = props.route.params;

  const addComment = async (values) => {
    try {
      const response = await Axios.put(
        `${API_URL}/api/group/${groupID}/post/${postID}`,
        values,
      );
      return props.navigation.push('View Group Post');
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          comment: '',
        }}
        validationSchema={Yup.object({
          comment: Yup.string().required('Comment cannot be empty'),
        })}
        onSubmit={(values) => addComment(values)}
        enableReinitialize>
        {(props) => (
          <>
            <InputComponent
              label="Comment"
              multiline
              value={props.values.comment}
              touched={props.touched.comment}
              errors={props.errors.comment}
              rightIcon={{name: 'comment'}}
              onChangeText={props.handleChange('comment')}
              onBlur={props.handleBlur('comment')}
              placeholder="Input your comment"
            />
            <ButtonComponent
              title="Add"
              icon={
                <Icon name="add" color="white" style={{paddingRight: 10}} />
              }
              onPress={props.handleSubmit}
              disabled={!props.isValid}
              loading={props.isSubmitting}
            />
          </>
        )}
      </Formik>
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
