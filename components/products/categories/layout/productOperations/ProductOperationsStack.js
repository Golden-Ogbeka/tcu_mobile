import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditProduct from './EditProduct';
import ViewBrand from './ViewBrand';
import ViewProduct from './ViewProduct';

const Stack = createStackNavigator();
export default function ProductOperationsStack({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#910000',
          },
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="View Product"
          component={ViewProduct}
          options={{title: "Product's Details"}}
        />
        <Stack.Screen
          name="View Brand"
          component={ViewBrand}
          options={{title: "Brand's Details"}}
        />
        <Stack.Screen name="Edit Product" component={EditProduct} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
