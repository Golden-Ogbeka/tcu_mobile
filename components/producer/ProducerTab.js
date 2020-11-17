import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import NewProduct from './NewProduct';
import ProducerProducts from './ProducerProducts';
import ProducerProfile from './ProducerProfile';

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
        name="Producer Profile"
        component={ProducerProfile}
        options={{
          tabBarIcon: () => (
            <Icon name="user" type="font-awesome-5" size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
