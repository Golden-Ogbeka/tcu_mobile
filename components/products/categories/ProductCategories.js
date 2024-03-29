import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';

export default function ProductCategories({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title onPress={() => navigation.navigate('PoultryProducts')}>
          <Text style={styles.category}>Poultry Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-poultry.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Poultry, Eggs, Chicks, Turkeys, etc</Text>
        </View>
        <ButtonComponent
          icon={<Icon name="info" style={{paddingRight: 10}} color="#ffffff" />}
          title="View Poultry Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('PoultryProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('FoodProducts')}>
          <Text style={styles.category}> Food Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-food.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Fast Food, Snacks, Varieties, etc</Text>
        </View>
        <ButtonComponent
          icon={<Icon name="info" style={{paddingRight: 10}} color="#ffffff" />}
          title="View Food Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('FoodProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('FrozenProducts')}>
          <Text style={styles.category}>Frozen Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-frozen.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Wholesale and retail frozen food</Text>
        </View>
        <ButtonComponent
          icon={<Icon name="info" style={{paddingRight: 10}} color="#ffffff" />}
          title="View Frozen Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('FrozenProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('TrainingProducts')}>
          <Text style={styles.category}>Training Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-training.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Seminars, Trainings, Workshops, etc.</Text>
        </View>
        <ButtonComponent
          icon={<Icon name="info" style={{paddingRight: 10}} color="#ffffff" />}
          title="View Training Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('TrainingProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('EquipmentProducts')}>
          <Text style={styles.category}>Equipment Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-equipment.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Feed, Drinkers, tools, cages, etc</Text>
        </View>
        <ButtonComponent
          icon={<Icon name="info" style={{paddingRight: 10}} color="#ffffff" />}
          title="View Equipment Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('EquipmentProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('MedicationProducts')}>
          <Text style={styles.category}>Medication Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-medication.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Vaccines, Drugs, etc</Text>
        </View>
        <ButtonComponent
          icon={<Icon name="info" style={{paddingRight: 10}} color="#ffffff" />}
          title="View Medication Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('MedicationProducts')}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 30,
    color: '#910000',
  },
  container: {
    flex: 1,
    marginBottom: 20,
  },
  image: {
    width: Card.width,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
  },
  textContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#910000',
  },
});
