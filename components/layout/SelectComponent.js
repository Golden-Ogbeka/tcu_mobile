import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Text} from 'react-native-elements';
import InputErrorComponent from './InputErrorComponent';

export default function SelectComponent(props) {
  return (
    <View style={{paddingBottom: 20}}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <DropDownPicker
        items={props.items.map((item) => ({
          label: item,
          value: item,
        }))}
        onChangeItem={props.onChangeItem}
        containerStyle={{height: 60, width: 370}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
          paddingLeft: 10,
        }}
        arrowSize={35}
        arrowColor="#910000"
        labelStyle={{fontSize: 25, color: 'black'}}
        activeLabelStyle={{
          borderBottomWidth: 2,
          color: 'white',
          borderBottomColor: 'white',
        }}
        activeItemStyle={{
          backgroundColor: '#910000',
          shadowColor: 'white',
        }}
        dropDownStyle={{
          backgroundColor: '#fafafa',
          maxHeight: 700,
          minHeight: 200,
        }}
        searchableStyle={{fontSize: 20}}
        searchable={props.searchable}
      />
      <InputErrorComponent touched={props.touched} errors={props.errors} />
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 20,
  },
  titleStyle: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    fontSize: 25,
    color: '#910000',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
