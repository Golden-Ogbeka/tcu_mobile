import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {API_URL} from '../../../app.json';
import ButtonComponent from '../../layout/ButtonComponent';
import ImageComponent from '../../layout/ImageComponent';
export default function ProductInfo(props) {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        if (props.type) {
          const response = await Axios.get(
            `${API_URL}/api/products?productType=${props.type}`,
          );
          let allProducts = response.data;
          setProductDetails(allProducts);
        }
        // if (props.productID) {
        //   const response = await Axios.get(
        //     `${API_URL}/api/about/product/${productID}`,
        //   );
        //   const productInfo = response.data;
        //   setProductDetails(productInfo);
        // }
      } catch (error) {
        setProductDetails([]);
      }
    };
    getProductDetails();
  }, []);

  return (
    <View>
      {productDetails &&
        productDetails.map((product) => (
          <Card key={product._id}>
            <Card.Title
              onPress={() =>
                props.navigation.navigate('Product Info', {
                  screen: 'View Product',
                  params: {productID: product._id},
                })
              }>
              <Text style={styles.productTitle}>{product.productName}</Text>
            </Card.Title>
            <Card.Divider />
            <ImageComponent
              uri={product.productImage}
              style={styles.image}
              onPress={() =>
                props.navigation.navigate('Product Info', {
                  screen: 'View Product',
                  params: {productID: product._id},
                })
              }
            />
            <Text style={styles.brand}>{product.brandName}</Text>
            <Text style={styles.description}>{product.productDescription}</Text>
            <Text style={styles.price}>NGN {product.price}</Text>
            <ButtonComponent
              icon={
                <Icon name="info" style={{paddingRight: 10}} color="#ffffff" />
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
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Card.width,
    height: 200,
    // resizeMode: 'contain',
    borderRadius: 20,
  },
  productName: {
    fontSize: 30,
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
  productTitle: {
    fontSize: 30,
    color: '#910000',
  },
  button: {
    backgroundColor: '#910000',
  },
});
