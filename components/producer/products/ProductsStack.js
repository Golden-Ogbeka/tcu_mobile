import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductOperationsStack from '../../products/layout/productOperations/ProductOperationsStack';
import ProducerProducts from './ProducerProducts';

const Stack = createStackNavigator();
export default function ProductsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Producer Products" component={ProducerProducts} />
      <Stack.Screen name="Product Info" component={ProductOperationsStack} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
