import {Formik} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Yup from 'yup';
import {Alert} from 'react-native';
import Axios from 'axios';
import {API_URL} from '../../../../app.json';
import ButtonComponent from '../../../layout/ButtonComponent';
import InputComponent from '../../../layout/InputComponent';

export default function EditPostComment(props) {
  const {groupID, postID, comment} = props.route.params;

  const commentID = comment._id;

  const updateComment = async (values) => {
    const {comment} = values;
    try {
      const response = await Axios.put(
        `${API_URL}/api/group/${groupID}/post/${postID}/comment`,
        {
          commentID,
          comment,
        },
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
          comment: comment.comment,
        }}
        validationSchema={Yup.object({
          comment: Yup.string().required('Comment cannot be empty'),
        })}
        onSubmit={(values) => updateComment(values)}
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
              title="Update"
              icon={
                <Icon name="save" color="white" style={{paddingRight: 10}} />
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
