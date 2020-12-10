import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Alert, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Button, Icon, Text, ListItem} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppContext} from '../context/AppContext';

export default function WelcomeScreen(props) {
  const {contextVariables, setContextVariables} = useAppContext();
  return (
    <React.Fragment>
      {contextVariables.loggedIn === false ? (
        <SafeAreaView style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/logo/tcu.png')}
            style={styles.logoImage}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              title="Login"
              icon={
                <Icon
                  raised
                  name="sign-in"
                  type="font-awesome"
                  color="#910000"
                />
              }
              onPress={() => props.navigation.navigate('Login')}
              type="clear"
              titleStyle={{color: '#910000', fontSize: 22}}
            />
            <Button
              title="Register"
              icon={
                <Icon raised name="user" type="font-awesome" color="#910000" />
              }
              onPress={() => props.navigation.navigate('Register')}
              type="clear"
              titleStyle={{color: '#910000', fontSize: 22}}
            />
          </View>
        </SafeAreaView>
      ) : (
        <ScrollView style={{flex: 1}}>
          <View style={styles.title}>
            <Text h3 style={{color: 'white'}}>
              {contextVariables.user.name}
            </Text>
          </View>
          <ListItem bottomDivider>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'box-open', type: 'font-awesome-5'}}
              overlayContainerStyle={{backgroundColor: '#910000'}}
              titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              onPress={() => props.navigation.navigate('Products')}
            />
            <ListItem.Content>
              <ListItem.Title
                style={styles.listTitle}
                onPress={() => props.navigation.navigate('Products')}>
                <Text h4>Products</Text>
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>
                Marketplace
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="View"
              titleStyle={{fontSize: 20}}
              onPress={() => props.navigation.navigate('Products')}
              buttonStyle={{backgroundColor: '#910000'}}
            />
          </ListItem>
          <ListItem bottomDivider>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'pen', type: 'font-awesome-5'}}
              overlayContainerStyle={{backgroundColor: '#910000'}}
              titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              onPress={() => props.navigation.navigate('Forum')}
            />
            <ListItem.Content>
              <ListItem.Title
                style={styles.listTitle}
                onPress={() => props.navigation.navigate('Forum')}>
                <Text h4>Forum</Text>
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>
                Create and join discussions
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="View"
              titleStyle={{fontSize: 20}}
              onPress={() => props.navigation.navigate('Forum')}
              buttonStyle={{backgroundColor: '#910000'}}
            />
          </ListItem>
          <ListItem bottomDivider>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'users', type: 'font-awesome'}}
              overlayContainerStyle={{backgroundColor: '#910000'}}
              titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              onPress={() => props.navigation.navigate('Groups')}
            />
            <ListItem.Content>
              <ListItem.Title
                style={styles.listTitle}
                onPress={() => props.navigation.navigate('Groups')}>
                <Text h4>Groups</Text>
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>
                Create or join associations
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="View"
              titleStyle={{fontSize: 20}}
              onPress={() => props.navigation.navigate('Groups')}
              buttonStyle={{backgroundColor: '#910000'}}
            />
          </ListItem>
          <ListItem bottomDivider>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'envelope', type: 'font-awesome'}}
              overlayContainerStyle={{backgroundColor: '#910000'}}
              titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              onPress={() => props.navigation.navigate('Messages')}
            />
            <ListItem.Content>
              <ListItem.Title
                style={styles.listTitle}
                onPress={() => props.navigation.navigate('Messages')}>
                <Text h4>Messages</Text>
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>
                Inbox
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="View"
              titleStyle={{fontSize: 20}}
              onPress={() => navigation.navigate('TrainingForum')}
              buttonStyle={{backgroundColor: '#910000'}}
            />
          </ListItem>
          <ListItem bottomDivider>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'attach-money', size: 40}}
              overlayContainerStyle={{backgroundColor: '#910000'}}
              titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              onPress={() => props.navigation.navigate('Producer Mode')}
            />
            <ListItem.Content>
              <ListItem.Title
                style={styles.listTitle}
                onPress={() => props.navigation.navigate('Producer Mode')}>
                <Text h4>Producer Mode</Text>
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>
                Promote your products and brand
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="View"
              titleStyle={{fontSize: 20}}
              onPress={() => props.navigation.navigate('Producer Mode')}
              buttonStyle={{backgroundColor: '#910000'}}
            />
          </ListItem>
          <ListItem bottomDivider>
            <Avatar
              size="medium"
              rounded
              icon={{name: 'user', type: 'font-awesome'}}
              overlayContainerStyle={{backgroundColor: '#910000'}}
              titleStyle={{color: 'white', fontSize: 25, fontWeight: 'bold'}}
              onPress={() => props.navigation.navigate('Profile')}
            />
            <ListItem.Content>
              <ListItem.Title
                style={styles.listTitle}
                onPress={() => props.navigation.navigate('Profile')}>
                <Text h4>Profile</Text>
              </ListItem.Title>
              <ListItem.Subtitle style={styles.listSubtitle}>
                Your details
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="View"
              titleStyle={{fontSize: 20}}
              onPress={() => props.navigation.navigate('Profile')}
              buttonStyle={{backgroundColor: '#910000'}}
            />
          </ListItem>
        </ScrollView>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationStyle: 'solid',
  },
  logoImage: {
    width: '100%',
    height: 500,
  },
  logoContainer: {
    top: -100,
    flexGrow: 1,
  },

  listTitle: {
    fontSize: 25,
  },
  listSubtitle: {
    fontSize: 18,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#910000',
  },
});
