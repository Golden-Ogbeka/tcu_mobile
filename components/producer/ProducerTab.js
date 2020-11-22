import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import BrandDetails from './BrandDetails';
import NewProduct from './NewProduct';
import ProducerProducts from './ProducerProducts';

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
        component={ProducerProducts}
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
        component={BrandDetails}
        options={{
          tabBarIcon: () => <Icon name="info" size={40} />, //Look for a better icon
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
