import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import InputErrorComponent from './InputErrorComponent';

export default function CheckBoxComponent(props) {
  return (
    <View style={{paddingBottom: 10}}>
      <CheckBox
        checkedColor="#910000"
        size={30}
        uncheckedColor="#910000"
        textStyle={{fontSize: 20}}
        checked={props.checked}
        {...props}
      />
      <InputErrorComponent touched={props.touched} errors={props.errors} />
    </View>
  );
}

const styles = StyleSheet.create({});
