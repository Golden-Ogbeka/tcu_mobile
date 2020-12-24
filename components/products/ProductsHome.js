import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EquipmentProducts from './categories/EquipmentProducts';
import FoodProducts from './categories/FoodProducts';
import FrozenProducts from './categories/FrozenProducts';
import ProductOperationsStack from './categories/layout/productOperations/ProductOperationsStack';
import MedicationProducts from './categories/MedicationProducts';
import PoultryProducts from './categories/PoultryProducts';
import ProductCategories from './categories/ProductCategories';
import TrainingProducts from './categories/TrainingProducts';

const Stack = createStackNavigator();
export default function ProductsHome({navigation}) {
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
        <Stack.Screen name="Product Categories" component={ProductCategories} />
        <Stack.Screen
          name="PoultryProducts"
          component={PoultryProducts}
          options={{title: 'Poultry Products'}}
        />
        <Stack.Screen
          name="FoodProducts"
          component={FoodProducts}
          options={{title: 'Food Products'}}
        />
        <Stack.Screen
          name="EquipmentProducts"
          component={EquipmentProducts}
          options={{title: 'Equipment Products'}}
        />
        <Stack.Screen
          name="FrozenProducts"
          component={FrozenProducts}
          options={{title: 'Frozen Products'}}
        />
        <Stack.Screen
          name="TrainingProducts"
          component={TrainingProducts}
          options={{title: 'Training Products'}}
        />
        <Stack.Screen
          name="MedicationProducts"
          component={MedicationProducts}
          options={{title: 'Medication Products'}}
        />
        <Stack.Screen
          name="Product Info"
          component={ProductOperationsStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
