import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, ListItem, Text} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';

export default function ForumSections({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="P"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('PoultryForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('PoultryForum')}>
            <Text h4>Poultry Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>About Live Chickens, Eggs, etc.</ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('PoultryForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="F"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('FoodForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('FoodForum')}>
            <Text h4>Food Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>About Fast Food, Snacks, etc. </ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('FoodForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="Fr"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('FrozenForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('FrozenForum')}>
            <Text h4>Frozen Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            About Frozen Food, Cold rooms, etc.
          </ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('FrozenForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="T"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('TrainingForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('TrainingForum')}>
            <Text h4>Training Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>About Tranings, Seminars, etc. </ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('TrainingForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="E"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('EquipmentForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('EquipmentForum')}>
            <Text h4>Equipment Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            About Feed, Tools, Equipment, etc.{' '}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('EquipmentForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="M"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('MedicationForum')}
        />
        <ListItem.Content>
          <ListItem.Title
            onPress={() => navigation.navigate('MedicationForum')}>
            <Text h4>Medication Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            About Live Chickens, Eggs, etc.{' '}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('MedicationForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="C"
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('ContactForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('ContactForum')}>
            <Text h4>Contact Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            Brand Descriptions, Contact, etc
          </ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="View"
          onPress={() => navigation.navigate('ContactForum')}
          buttonStyle={{backgroundColor: '#910000'}}
        />
      </ListItem>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
