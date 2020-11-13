import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';
// import {ScrollView} from 'react-native-gesture-handler';

export default function ProductCategories({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <Text>Categories</Text>
      <Card>
        <Card.Title>Poultry</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Poultry Products"
            onPress={() => navigation.navigate('PoultryProducts')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Food</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Food Products"
            onPress={() => navigation.navigate('FoodProducts')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Frozen Products</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Frozen Products"
            onPress={() => navigation.navigate('FrozenProducts')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Training</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Training Products"
            onPress={() => navigation.navigate('TrainingProducts')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Equipment</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Equipment Products"
            onPress={() => navigation.navigate('EquipmentProducts')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Medication</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Medication Products"
            onPress={() => navigation.navigate('MedicationProducts')}
          />
        </Card.FeaturedSubtitle>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
