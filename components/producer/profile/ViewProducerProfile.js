import React, {useState, useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, View, Share} from 'react-native';
import {Text, ListItem, Avatar, Icon} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';
import ImageComponent from '../../layout/ImageComponent';
import {API_URL} from '../../../app.json';
import Axios from 'axios';

export default function ViewProducerProfile(props) {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/api/user`);
        const userData = response.data;
        setUserDetails(userData);
      } catch (error) {
        setUserDetails({});
      }
    };
    getUserData();
  }, [userDetails]);

  const ShareBrand = async () => {
    try {
      const url = `${API_URL}/about/brand/${userDetails.brandName}`;
      await Share.share({
        title: userDetails.brandName,
        message: `View my brand: ${userDetails.brandName}. ${url}`,
        url: url,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.editButtonView}>
          <ButtonComponent
            title="Share Brand"
            icon={
              <Icon
                name="share"
                size={20}
                color="white"
                style={{paddingRight: 10}}
              />
            }
            buttonStyle={styles.controlButton}
            onPress={() => ShareBrand()}
          />
        </View>
        <View style={styles.editButtonView}>
          <ButtonComponent
            title="Edit Profile"
            icon={
              <Icon
                name="pen"
                type="font-awesome-5"
                size={20}
                color="white"
                style={{paddingRight: 10}}
              />
            }
            buttonStyle={styles.controlButton}
            onPress={() => props.navigation.navigate('Edit Producer Profile')}
          />
        </View>
      </View>

      <View style={styles.imageContainer}>
        <ImageComponent uri={userDetails.brandImage} label="Brand Image" />
      </View>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'attach-money', size: 30}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.producerStatus}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Producer Status</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'user', type: 'font-awesome'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandName}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Name</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'envelope', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandEmail}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Email</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'phone', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandNumber}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Number</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'location-pin', size: 25}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandState}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's State</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'location-history', size: 25}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandAddress}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Address</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'description', size: 25}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandDescription}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Description</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'info', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandMotto}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Motto</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'info', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.brandVision}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Vision</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'calendar', type: 'font-awesome'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{new Date(userDetails.brandDate).toDateString()}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Founding Date</ListItem.Subtitle>
        </ListItem.Content>
        <ButtonComponent
          title="Change"
          buttonStyle={{backgroundColor: '#910000'}}
          onPress={() =>
            props.navigation.navigate('Change Date', {
              dateType: 'brandDate',
            })
          }
        />
      </ListItem>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  controlButton: {
    backgroundColor: '#910000',
  },
  editButtonView: {
    alignItems: 'flex-end',
    padding: 10,
    // backgroundColor: 'white',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'white',
  },
});
