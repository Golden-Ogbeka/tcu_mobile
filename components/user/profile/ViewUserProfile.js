import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text, Button, ListItem, Avatar, Icon} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import ButtonComponent from '../../layout/ButtonComponent';

export default function ViewUserProfile(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  return (
    <ScrollView>
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
        <Image source="" style={styles.profileImage} />
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
            <Text h4>{contextVariables.user.name}</Text>
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
            <Text h4>{contextVariables.user.email}</Text>
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
            <Text h4>{contextVariables.user.phoneNumber}</Text>
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
            <Text h4>{contextVariables.user.gender}</Text>
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
            <Text h4>{contextVariables.user.state}</Text>
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
            <Text h4>{contextVariables.user.address}</Text>
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
            <Text h4>{contextVariables.user.producerStatus}</Text>
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
            <Text h4>{contextVariables.user.distributorStatus}</Text>
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
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 200,
    height: 200,
  },
});
