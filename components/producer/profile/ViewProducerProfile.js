import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text, Button, ListItem, Avatar} from 'react-native-elements';
import {useAppContext} from '../../../context/AppContext';

export default function ViewProducerProfile(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  return (
    <ScrollView>
      <View style={styles.editButtonView}>
        <Button
          title="Edit Profile"
          buttonStyle={styles.editButton}
          onPress={() => props.navigation.navigate('Edit Producer Profile')}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image source="" style={styles.profileImage} />
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
            <Text h4>{contextVariables.user.producerStatus}</Text>
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
            <Text h4>{contextVariables.user.brandName}</Text>
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
            <Text h4>{contextVariables.user.brandEmail}</Text>
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
            <Text h4>{contextVariables.user.brandNumber}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Number</ListItem.Subtitle>
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
            <Text h4>{contextVariables.user.brandState}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's State</ListItem.Subtitle>
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
            <Text h4>{contextVariables.user.brandAddress}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Address</ListItem.Subtitle>
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
            <Text h4>{contextVariables.user.brandDescription}</Text>
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
            <Text h4>{contextVariables.user.brandMotto}</Text>
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
            <Text h4>{contextVariables.user.brandVision}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Vision</ListItem.Subtitle>
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
            <Text h4>{contextVariables.user.brandDate}</Text>
          </ListItem.Title>
          <ListItem.Subtitle>Brand's Founding Date</ListItem.Subtitle>
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
