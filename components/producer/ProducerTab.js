import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewProduct from './NewProduct';
import ProducerProducts from './ProducerProducts';
import ProducerProfile from './ProducerProfile';

const Tab = createBottomTabNavigator();

export default function ProducerTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Your products" component={ProducerProducts} />
      <Tab.Screen name="New Product" component={NewProduct} />
      <Tab.Screen name="Producer Profile" component={ProducerProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
