import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';
import {API_URL} from '../../app.json';

export default function ImageComponent(props) {
  return (
    <View>
      <Image
        source={{
          uri: `${API_URL}/${props.uri}`,
        }}
        PlaceholderContent={<ActivityIndicator color="red" size="large" />}
        placeholderStyle={{
          backgroundColor: 'black',
        }}
        style={styles.image}
        {...props}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'grey'}}>{props.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //   imageContainer: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     padding: 20,
  //   },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    // resizeMode: 'contain',
  },
});
