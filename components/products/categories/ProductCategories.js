import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Icon, Text} from 'react-native-elements';
// import {ScrollView} from 'react-native-gesture-handler';

export default function ProductCategories({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title onPress={() => navigation.navigate('PoultryProducts')}>
          <Text h3>Poultry Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-poultry.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>
          Live Poultry, Eggs, Chicks, Turkeys, etc.
        </Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Poultry Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('PoultryProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('FoodProducts')}>
          <Text h3> Food Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-food.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Fast Food, Snacks, Varieties, etc</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Food Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('FoodProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('FrozenProducts')}>
          <Text h3>Frozen Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-frozen.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Wholesale and retail frozen food</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Frozen Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('FrozenProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('TrainingProducts')}>
          <Text h3>Training Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-training.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Seminars, Trainings, Workshops, etc.</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Training Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('TrainingProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('EquipmentProducts')}>
          <Text h3>Equipment Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-equipment.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Feed, Drinkers, tools, cages, etc</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Equipment Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('EquipmentProducts')}
        />
      </Card>
      <Card>
        <Card.Title onPress={() => navigation.navigate('MedicationProducts')}>
          <Text h3>Medication Products</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-medication.jpg')}
          style={styles.image}
        />
        <Text style={styles.text}>Vaccines, Drugs, etc</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Medication Products"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('MedicationProducts')}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  image: {
    width: Card.width,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#910000',
  },
});
