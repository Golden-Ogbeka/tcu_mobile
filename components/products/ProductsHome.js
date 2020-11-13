import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
import EquipmentProducts from './categories/EquipmentProducts';
import FoodProducts from './categories/FoodProducts';
import FrozenProducts from './categories/FrozenProducts';
import MedicationProducts from './categories/MedicationProducts';
import PoultryProducts from './categories/PoultryProducts';
import ProductCategories from './categories/ProductCategories';
import TrainingProducts from './categories/TrainingProducts';

const Stack = createStackNavigator();
export default function ProductsHome({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="Product Categories" component={ProductCategories} />
        <Stack.Screen name="PoultryProducts" component={PoultryProducts} />
        <Stack.Screen name="FoodProducts" component={FoodProducts} />
        <Stack.Screen name="EquipmentProducts" component={EquipmentProducts} />
        <Stack.Screen name="FrozenProducts" component={FrozenProducts} />
        <Stack.Screen name="TrainingProducts" component={TrainingProducts} />
        <Stack.Screen
          name="MedicationProducts"
          component={MedicationProducts}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
