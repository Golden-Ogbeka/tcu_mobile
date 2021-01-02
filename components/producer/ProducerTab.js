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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Your products') {
            iconName = focused ? 'inventory' : 'inventory';
          } else if (route.name === 'New Product') {
            iconName = focused ? 'add-circle-outline' : 'add-circle';
          } else if (route.name === 'Brand Details') {
            iconName = focused ? 'info' : 'info';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={40} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          height: 70,
        },
        activeBackgroundColor: '#910000',
        keyboardHidesTabBar: true,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        labelStyle: {
          fontSize: 20,
        },
      }}>
      <Tab.Screen name="Your products" component={ProductsStack} />
      {/* <Tab.Screen name="New Product" component={NewProduct} /> */}
      <Tab.Screen name="Brand Details" component={ProducerProfile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
