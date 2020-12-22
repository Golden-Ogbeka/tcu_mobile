import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, Card, Icon, ListItem} from 'react-native-elements';
import {API_URL} from '../../../../app.json';
import ButtonComponent from '../../../layout/ButtonComponent';
import ImageComponent from '../../../layout/ImageComponent';
import LoadingIndicator from '../../../layout/LoadingIndicator';

export default function ViewProduct(props) {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const {productID} = props.route.params;

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${API_URL}/api/about/product/${productID}`,
        );
        const productInfo = response.data;
        setProductDetails(productInfo);
        setLoading(false);
      } catch (error) {
        setProductDetails({});
        setLoading(false);
      }
    };
    getProductDetails();
  }, []);
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', flex: 1}}>
      {loading === false ? (
        Object.keys(productDetails).length > 0 ? (
          <ScrollView>
            <View style={styles.editButtonView}>
              <ButtonComponent
                title="View Brand"
                icon={
                  <Icon
                    name="info-circle"
                    type="font-awesome-5"
                    size={20}
                    color="white"
                    style={{paddingRight: 10}}
                  />
                }
                onPress={() =>
                  props.navigation.navigate('View Brand', {
                    brandName: productDetails.brandName,
                  })
                }
              />
            </View>
            <View style={styles.imageContainer}>
              <ImageComponent
                uri={productDetails.productImage}
                label="Product's Image"
              />
            </View>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.productName}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Product's Name</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>NGN {productDetails.price}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Price</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.productType}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Product's Type</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.productDescription}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Product's Description</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.brandName}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Name</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.brandNumber}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Number</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.brandEmail}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Email</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.brandAddress}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Address</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{productDetails.brandState}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's State</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </ScrollView>
        ) : (
          <Text>Product Not found</Text>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  editButtonView: {
    alignItems: 'flex-end',
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
