import React from 'react';
import {ScrollView} from 'react-native';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Card, Icon, Text} from 'react-native-elements';

export default function FoodProducts({navigation}) {
  return (
    <ScrollView>
      <Card>
        <Card.Title onPress={() => navigation.navigate('PoultryProducts')}>
          <Text h3>Product Name</Text>
        </Card.Title>
        <Card.Divider />
        <Image
          source={require('../../../assets/images/productCategories/tcu-poultry.jpg')}
          style={styles.image}
        />
        <Text style={styles.brand}>Brand</Text>
        <Text style={styles.description}>Product Description</Text>
        <Text style={styles.price}>Price</Text>
        <Button
          icon={<Icon name="info" style={{marginRight: 2}} color="#ffffff" />}
          title="View Product Details"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('PoultryProducts')}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Card.width,
    height: 200,
    resizeMode: 'contain',
  },
  brand: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
    fontSize: 20,
    fontStyle: 'italic',
  },
  price: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#910000',
  },
});
