import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';

export default function ImagePickerComponent(props) {
  const [imageUri, setImageUri] = useState('');

  return (
    <View>
      <Text>{props.route.params.imageType}</Text>
      <ImageComponent uri={imageUri} />
      <ButtonComponent title="Upload new Image" />
    </View>
  );
}

const styles = StyleSheet.create({});
