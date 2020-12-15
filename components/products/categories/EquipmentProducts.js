import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {API_URL} from '../../../app.json';
import LoadingIndicator from '../../layout/LoadingIndicator';
import ProductInfo from './layout/ProductInfo';

export default function EquipmentProducts({navigation}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${API_URL}/api/products?productType=Equipment`,
        );
        const allProducts = response.data;
        setProducts(allProducts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <ScrollView>
      {loading === false ? (
        products.length > 0 ? (
          <ProductInfo type="Equipment" />
        ) : (
          <View style={styles.container}>
            <Text h3>No products found</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
