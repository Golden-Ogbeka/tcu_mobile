import Axios from 'axios';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Yup from 'yup';
import {API_URL} from '../../../../app.json';
import ButtonComponent from '../../../layout/ButtonComponent';
import InputComponent from '../../../layout/InputComponent';

export default function EditGroupPost(props) {
  const {groupID, post} = props.route.params;
  const [loading, setLoading] = useState();

  const postID = post._id;
  const updatePost = async (values) => {
    try {
      const response = await Axios.put(
        `${API_URL}/api/group/${groupID}/post/${postID}`,
        values,
      );
      return props.navigation.navigate('View Group Post', {groupID, postID});
    } catch (error) {
      Alert.alert(error.response.data);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: post.title,
          content: post.content,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Post's title is required"),
          content: Yup.string().required("Post's content is required"),
        })}
        onSubmit={(values) => updatePost(values)}
        enableReinitialize>
        {(props) => (
          <>
            <InputComponent
              label="Title"
              value={props.values.title}
              touched={props.touched.title}
              errors={props.errors.title}
              rightIcon={{name: 'title'}}
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              placeholder="Input post's title"
            />
            <InputComponent
              label="Content"
              multiline
              value={props.values.content}
              touched={props.touched.content}
              errors={props.errors.content}
              rightIcon={{name: 'content-paste'}}
              onChangeText={props.handleChange('content')}
              onBlur={props.handleBlur('content')}
              placeholder="Input post's content"
            />
            <ButtonComponent
              title="Add Post"
              icon={
                <Icon
                  name="add"
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
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
