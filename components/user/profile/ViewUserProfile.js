import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, ListItem, Avatar, Icon} from 'react-native-elements';
import ButtonComponent from '../../layout/ButtonComponent';
import {API_URL} from '../../../app.json';
import ImageComponent from '../../layout/ImageComponent';
import Axios from 'axios';

export default function ViewUserProfile(props) {
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
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
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
          onPress={() => props.navigation.navigate('Edit User Profile')}
        />
      </View>
      <View style={styles.imageContainer}>
        <ImageComponent uri={userDetails.userImage} label="User Image" />
        <ButtonComponent
          title="Change"
          buttonStyle={{backgroundColor: '#910000'}}
          onPress={() =>
            props.navigation.navigate('Change User Image', {
              imageType: 'userImage',
            })
          }
        />
      </View>

      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'user', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.name}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Name</ListItem.Subtitle>
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
            <Text h4>{userDetails.email}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Email</ListItem.Subtitle>
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
            <Text h4>{userDetails.phoneNumber}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Phone Number</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          size="small"
          rounded
          icon={{name: 'users', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.gender}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Gender</ListItem.Subtitle>
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
          icon={{name: 'truck', type: 'font-awesome-5'}}
          overlayContainerStyle={{backgroundColor: '#910000'}}
          titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
        />
        <ListItem.Content>
          <ListItem.Title>
            <Text h4>{userDetails.distributorStatus}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Distributor Status</ListItem.Subtitle>
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
    // backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'white',
  },
});
