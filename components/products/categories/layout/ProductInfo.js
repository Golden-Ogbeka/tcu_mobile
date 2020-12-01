import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Card, Icon, Text} from 'react-native-elements';
import {API_URL} from '../../../../app.json';

export default function ProductInfo(props) {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        if (props.section) {
          const response = await Axios.get(
            `${API_URL}/api/products?productType=Poultry`,
          );
          let allProducts = response.data;
          //   allProducts = allProducts.map((product) => {
          //     // console.log(product.productImage);

          //     const imageFile = new File(product.productImage, {
          //       type: 'image/jpg',
          //     });
          //     product.productImage = URL.createObjectURL(imageFile);
          //     console.log(product.productImage);
          //     return product;
          //   });
          //It is returned as an array
          setProductDetails(allProducts);
        }
        if (props.productID) {
          const response = await Axios.get(
            `${API_URL}/api/about/product/${productID}`,
          );
          const productInfo = response.data;
          setProductDetails(productInfo);
        }
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
              onPress={() => props.navigation.navigate('PoultryProducts')}>
              <Text h3>{product.productName}</Text>
            </Card.Title>
            <Card.Divider />
            <Image source={`${product.productImage}`} style={styles.image} />
            <Text style={styles.brand}>{product.brandName}</Text>
            <Text style={styles.description}>{product.productDescription}</Text>
            <Text style={styles.price}>NGN {product.price}</Text>
            <Button
              icon={
                <Icon name="info" style={{marginRight: 2}} color="#ffffff" />
              }
              title="View Product Details"
              buttonStyle={styles.button}
              onPress={() => props.navigation.navigate('PoultryProducts')}
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
    resizeMode: 'contain',
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
  button: {
    backgroundColor: '#910000',
  },
});
