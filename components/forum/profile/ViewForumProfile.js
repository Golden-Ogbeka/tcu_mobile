import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text, Button, ListItem, Avatar} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';

export default function ViewForumProfile(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  return (
    <ScrollView>
      <View style={styles.editButtonView}>
        <Button
          title="Edit Profile"
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
          icon={{name: 'list', type: 'font-awesome-5'}}
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
          icon={{name: 'list', type: 'font-awesome-5'}}
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
