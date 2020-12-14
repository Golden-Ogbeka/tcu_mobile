import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text, Button, ListItem, Avatar, Icon} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';
import ButtonComponent from '../../layout/ButtonComponent';

export default function ViewForumProfile(props) {
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
          onPress={() => props.navigation.navigate('Edit Forum Profile')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source="" style={styles.profileImage} />
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
            <Text h4>{contextVariables.user.brandName}</Text>
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
