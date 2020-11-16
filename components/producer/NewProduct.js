import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

export default function NewProduct() {
  return (
    <View>
      <Text>Add new Product</Text>
      <Input label="Product Name" />
      <Input label="Product Type Dropdown" />
      <Input label="Product Description textarea" />
      <Input label="Price" />
      <Input label="Product Image" />
      <Button title="Add Product" />
    </View>
  );
}

const styles = StyleSheet.create({});
