import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ImageBackground,
  View,
  StyleSheet,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import NavLayout from './components/layout/NavLayout';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/userAuth/Login';
import Register from './components/userAuth/Register';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ProductsHome from './components/products/ProductsHome';
import ForumHome from './components/forum/ForumHome';
import UserProfileTab from './components/user/Profile/UserProfileTab';
import ProducerTab from './components/producer/ProducerTab';
import GroupsTab from './components/groups/GroupsTab';
import Messages from './components/user/Messages';
import About from './components/About';
import {Icon} from 'react-native-elements';
import UserStats from './components/user/UserStats';
import Axios from 'axios';
import {API_URL} from './app.json';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    const func = async () => {
      try {
        const response = await Axios.get(`${API_URL}/testing`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  });
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          {/* When not logged in */}
          {/* <Drawer.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#910000',
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
            }}>
            <Drawer.Screen name="Home" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator> */}
          {/* When Logged in */}
          <Drawer.Navigator
            drawerContentOptions={{
              activeBackgroundColor: '#910000',
              activeTintColor: 'white',
              inactiveTintColor: 'black',
              style: {
                borderRightWidth: 1,
                borderColor: '#910000',
              },
              labelStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}>
            <Drawer.Screen
              name="Products"
              component={ProductsHome}
              options={{
                drawerIcon: () => (
                  <Icon name="box-open" type="font-awesome-5" color="#C0C0C0" />
                ),
              }}
            />
            <Drawer.Screen
              name="Forum"
              component={ForumHome}
              options={{
                drawerIcon: () => (
                  <Icon name="pen" type="font-awesome-5" color="#C0C0C0" />
                ),
              }}
            />
            <Drawer.Screen
              name="Groups"
              component={GroupsTab}
              options={{
                drawerIcon: () => (
                  <Icon name="group" type="font-awesome" color="#C0C0C0" />
                ),
              }}
            />
            <Drawer.Screen
              name="Profile"
              component={UserProfileTab}
              options={{
                drawerIcon: () => (
                  <Icon name="user" type="font-awesome-5" color="#C0C0C0" />
                ),
              }}
            />
            <Drawer.Screen
              name="Producer Mode"
              component={ProducerTab}
              options={{
                drawerIcon: () => <Icon name="attach-money" color="#C0C0C0" />,
              }}
            />
            <Drawer.Screen
              name="Messages"
              component={Messages}
              options={{
                drawerIcon: () => <Icon name="message" color="#C0C0C0" />,
              }}
            />
            <Drawer.Screen
              name="Your Statistics"
              component={UserStats}
              options={{
                drawerIcon: () => <Icon name="hourglass-top" color="#C0C0C0" />,
              }}
            />
            <Drawer.Screen
              name="About"
              component={About}
              options={{
                drawerIcon: () => <Icon name="info" color="#C0C0C0" />,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
  },
});

export default App;
