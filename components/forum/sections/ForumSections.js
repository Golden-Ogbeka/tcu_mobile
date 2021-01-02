import React from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import {Avatar, Button, Card, ListItem} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';

export default function ForumSections({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <ListItem bottomDivider>
        <Avatar
          rounded
          title="P"
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('PoultryForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('PoultryForum')}>
            <Text style={styles.section}>Poultry Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>About Live Chickens, Eggs, etc.</Text>
          </ListItem.Subtitle>
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
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('FoodForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('FoodForum')}>
            <Text style={styles.section}>Food Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>About Fast Food, Snacks, etc.</Text>
          </ListItem.Subtitle>
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
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('FrozenForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('FrozenForum')}>
            <Text style={styles.section}>Frozen Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>About Frozen Food, Cold rooms, etc.</Text>
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
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('TrainingForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('TrainingForum')}>
            <Text style={styles.section}>Training Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>About Tranings, Seminars, etc.</Text>
          </ListItem.Subtitle>
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
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('EquipmentForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('EquipmentForum')}>
            <Text style={styles.section}>Equipment Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>About Feed, Tools, Equipment, etc. </Text>
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
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('MedicationForum')}
        />
        <ListItem.Content>
          <ListItem.Title
            onPress={() => navigation.navigate('MedicationForum')}>
            <Text style={styles.section}>Medication Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>About Live Chickens, Eggs, etc. </Text>
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
          overlayContainerStyle={{backgroundColor: '#910000', padding: 20}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('ContactForum')}
        />
        <ListItem.Content>
          <ListItem.Title onPress={() => navigation.navigate('ContactForum')}>
            <Text style={styles.section}>Contact Forum</Text>
          </ListItem.Title>
          <ListItem.Subtitle>
            <Text>Brand Descriptions, Contact, etc</Text>
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

const styles = StyleSheet.create({
  section: {
    color: '#910000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
