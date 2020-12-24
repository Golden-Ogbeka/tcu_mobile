import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Text, ListItem} from 'react-native-elements';
import {API_URL} from '../../../../../app.json';
import ImageComponent from '../../../../layout/ImageComponent';
import LoadingIndicator from '../../../../layout/LoadingIndicator';

export default function ViewBrand(props) {
  const [brandDetails, setBrandDetails] = useState({
    brandInfo: '',
    brandProducts: '',
  });
  const [loading, setLoading] = useState(true);
  const {brandName} = props.route.params;

  const {brandInfo, brandProducts} = brandDetails;

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(
          `${API_URL}/api/about/brand/${brandName}`,
        );

        setBrandDetails({
          brandInfo: response.data.brandInfo,
          brandProducts: response.data.brandProducts,
        });
        setLoading(false);
      } catch (error) {
        setBrandDetails({
          brandInfo: '',
          brandProducts: '',
        });
        setLoading(false);
      }
    };
    getProductDetails();
  }, []);
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white', flex: 1}}>
      {loading === false ? (
        Object.keys(brandInfo).length > 0 ? (
          <ScrollView>
            <View style={styles.imageContainer}>
              <ImageComponent
                uri={brandInfo.brandImage}
                label="Brand's Image"
              />
            </View>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandName}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Name</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandDescription}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Description</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandNumber}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Number</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandEmail}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Email</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandAddress}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Address</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandState}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's State</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandMotto}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Motto</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandInfo.brandVision}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Vision</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{new Date(brandInfo.brandDate).toDateString()}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Brand's Founding Date</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>
                  <Text h4>{brandProducts.length}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>Number of Products</ListItem.Subtitle>
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
  imageContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
