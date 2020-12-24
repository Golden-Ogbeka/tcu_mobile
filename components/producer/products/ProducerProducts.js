import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Card, Icon, Text} from 'react-native-elements';
import {API_URL} from '../../../app.json';
import ButtonComponent from '../../layout/ButtonComponent';
import ImageComponent from '../../layout/ImageComponent';
import LoadingIndicator from '../../layout/LoadingIndicator';

export default function ProducerProducts(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(`${API_URL}/api/producerProducts`);
        const producerProducts = response.data;
        setProducts(producerProducts);
        setLoading(false);
      } catch (error) {
        setProducts([]);
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <View style={styles.title}>
        <Text h3 style={{color: 'white'}}>
          Your Products
        </Text>
      </View>
      {loading === false ? (
        products.length > 0 ? (
          products.map((product) => (
            <Card key={product._id}>
              <Card.Title>
                <Text h3>{product.productName}</Text>
              </Card.Title>
              <Card.Divider />
              <ImageComponent uri={product.image} style={styles.image} />
              <Text style={styles.brand}>{product.brandName}</Text>
              <Text style={styles.description}>
                {product.productDescription}
              </Text>
              <Text style={styles.price}>NGN {product.price}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 20,
                }}>
                <Text h4>Views: {product.clicks}</Text>
                <Text h4 style={{color: 'blue'}}>
                  Status: {product.status}
                </Text>
              </View>
              <ButtonComponent
                icon={
                  <Icon name="info" style={{marginRight: 2}} color="#ffffff" />
                }
                title="View Product Details"
                buttonStyle={styles.button}
                onPress={() =>
                  props.navigation.navigate('Product Info', {
                    screen: 'View Product',
                    params: {productID: product._id},
                  })
                }
              />
            </Card>
          ))
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text h3>No product found</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Card.width,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
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
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
});
