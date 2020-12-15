import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, ListItem, Avatar, Icon} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';
import ImageComponent from '../../layout/ImageComponent';
import {API_URL} from '../../../app.json';

export default function ViewForumProfile(props) {
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
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
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
          buttonStyle={styles.editButton}
          onPress={() => props.navigation.navigate('Edit Forum Profile')}
        />
      </View>
      <View style={styles.imageContainer}>
        <ImageComponent uri={userDetails.userImage} label="User Image" />
      </View>
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
          <ListItem.Subtitle>Brand Name</ListItem.Subtitle>
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
            <Text h4>{userDetails.state}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>State</ListItem.Subtitle>
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
            <Text h4>{userDetails.address}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Address</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  editButton: {
    backgroundColor: '#910000',
  },
  editButtonView: {
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
});
