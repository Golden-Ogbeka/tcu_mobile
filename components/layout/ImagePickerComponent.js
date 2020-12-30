import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
import CameraRoll from '@react-native-community/cameraroll';
import Axios from 'axios';
import {API_URL} from '../../app.json';
import {FlatList} from 'react-native';

export default function ImagePickerComponent(props) {
  const [imageUri, setImageUri] = useState('');
  const {imageType} = props.route.params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`${API_URL}/api/user`);
        if (imageType === 'userImage') {
          setImageUri(response.data.userImage);
        } else if (imageType === 'brandImage') {
          setImageUri(response.data.brandImage);
        } else if (imageType === 'productImage') {
          setImageUri(response.data.productImage);
        }
        // setImageUri(response.data[imageType]);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    // const hasPermission = await PermissionsAndroid.check(permission);
    // if (hasPermission) {
    //   return true;
    // }
    // const status = await PermissionsAndroid.request(permission);
    // if (status === 'granted') {
    //   CameraRoll.getPhotos({
    //     first: 20,
    //     assetType: 'Photos',
    //   }).then((response) => {
    //     console.log(response);
    //   });
    // }
    // CameraRoll.getPhotos({
    //   first: 20,
    //   assetType: 'Photos',
    // }).then((response) => {
    //   console.log(response);
    // });
    const result = await PermissionsAndroid.request(permission);
    if (result !== 'granted') {
      return console.log('Access Denied');
    }
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
      groupTypes: 'All',
    })
      .then((res) => {
        res.edges.map((item) => console.log(item.node.image));
        setImages(res.edges);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // async function savePicture() {
  //   if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
  //     return;
  //   }

  //   CameraRoll.save(tag, {type, album});
  // }

  return (
    <View>
      <Text>{props.route.params.imageType}</Text>
      <ImageComponent uri={imageUri} />
      <ButtonComponent
        title="Upload new Image"
        onPress={() => hasAndroidPermission()}
      />
      <FlatList
        data={images}
        numColumns={3}
        renderItem={({item, index}) => (
          <ImageComponent
            key={index}
            style={{width: '33%', height: 150}}
            source={{uri: item.node.image.uri}}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
