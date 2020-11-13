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

const Stack = createStackNavigator();
export default function ForumSectionStack() {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="Sections" component={ForumSections} />
        <Stack.Screen name="PoultryForum" component={PoultryForum} />
        <Stack.Screen name="FoodForum" component={FoodForum} />
        <Stack.Screen name="EquipmentForum" component={EquipmentForum} />
        <Stack.Screen name="ContactForum" component={ContactForum} />
        <Stack.Screen name="TrainingForum" component={TrainingForum} />
        <Stack.Screen name="MedicationForum" component={MedicationForum} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
