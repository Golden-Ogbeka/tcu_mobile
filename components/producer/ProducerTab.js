import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import NewProduct from './products/NewProduct';
import ProductsStack from './products/ProductsStack';
import ProducerProfile from './profile/ProducerProfile';

const Tab = createBottomTabNavigator();

export default function ProducerTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 70,
        },
        activeTintColor: '#910000',
        inactiveTintColor: 'gray',
        // showLabel: false,
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Your products"
        component={ProductsStack}
        options={{
          tabBarIcon: () => (
            <Icon name="box-open" type="font-awesome-5" size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="New Product"
        component={NewProduct}
        options={{
          tabBarIcon: () => (
            <Icon name="plus" type="font-awesome-5" size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Brand Details"
        component={ProducerProfile}
        options={{
          tabBarIcon: () => <Icon name="info" size={40} />, //Look for a better icon
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
