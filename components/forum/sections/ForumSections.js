import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card} from 'react-native-elements';

export default function ForumSections({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <Text>Sections</Text>
      <Card>
        <Card.Title>Poultry Forum</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Poultry Forum"
            onPress={() => navigation.navigate('PoultryForum')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Food Forum</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Food Forum"
            onPress={() => navigation.navigate('FoodForum')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Frozen Forum</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Frozen Forum"
            onPress={() => navigation.navigate('FrozenForum')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Training Forum</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Training Forum"
            onPress={() => navigation.navigate('TrainingForum')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Equipment Forum</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Equipment Forum"
            onPress={() => navigation.navigate('EquipmentForum')}
          />
        </Card.FeaturedSubtitle>
      </Card>
      <Card>
        <Card.Title>Medication Forum</Card.Title>
        <Card.FeaturedSubtitle style={{color: 'red'}}>
          <Button
            title="View Medication Forum"
            onPress={() => navigation.navigate('MedicationForum')}
          />
        </Card.FeaturedSubtitle>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
