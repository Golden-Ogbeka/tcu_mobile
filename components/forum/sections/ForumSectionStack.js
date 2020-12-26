import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ForumSections from './ForumSections';
import PoultryForum from '../sections/PoultryForum';
import FoodForum from '../sections/FoodForum';
import TrainingForum from '../sections/TrainingForum';
import MedicationForum from '../sections/MedicationForum';
import ContactForum from '../sections/ContactForum';
import EquipmentForum from '../sections/EquipmentForum';
import FrozenForum from './FrozenForum';

const Stack = createStackNavigator();
export default function ForumSectionStack() {
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
          name="Forum Sections"
          component={ForumSections}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PoultryForum"
          component={PoultryForum}
          options={{title: 'Poultry Forum'}}
        />
        <Stack.Screen
          name="FoodForum"
          component={FoodForum}
          options={{title: 'Food Forum'}}
        />
        <Stack.Screen
          name="FrozenForum"
          component={FrozenForum}
          options={{title: 'Frozen Forum'}}
        />
        <Stack.Screen
          name="EquipmentForum"
          component={EquipmentForum}
          options={{title: 'Equipment Forum'}}
        />
        <Stack.Screen
          name="ContactForum"
          component={ContactForum}
          options={{title: 'Contact Forum'}}
        />
        <Stack.Screen
          name="TrainingForum"
          component={TrainingForum}
          options={{title: 'Training Forum'}}
        />
        <Stack.Screen
          name="MedicationForum"
          component={MedicationForum}
          options={{title: 'Medication Forum'}}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
