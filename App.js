import React, {useEffect, useState} from 'react';
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
  Alert,
} from 'react-native';
import NavLayout from './components/layout/NavLayout';
import WelcomeScreen from './components/WelcomeScreen';
import Login from './components/userAuth/Login';
import Register from './components/userAuth/Register';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ProductsHome from './components/products/ProductsHome';
import ForumHome from './components/forum/ForumHome';
import UserProfileTab from './components/user/profile/UserProfileTab';
import ProducerTab from './components/producer/ProducerTab';
import GroupsTab from './components/groups/GroupsTab';
import Messages from './components/user/Messages';
import About from './components/About';
import {Icon} from 'react-native-elements';
import UserStats from './components/user/UserStats';
import Axios from 'axios';
import {API_URL} from './app.json';

// Context
import {AppContext} from './context/AppContext';
import Logout from './components/userAuth/Logout';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [contextVariables, setContextVariables] = useState({
    user: {},
    loggedIn: false,
  });
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/api/user`);
        const userData = response.data;
        setContextVariables({
          ...contextVariables,
          user: userData,
          loggedIn: true,
        });
      } catch (error) {
        setContextVariables({
          ...contextVariables,
          user: {},
          loggedIn: false,
        });
      }
    };
    getUserData();
    const verifyUser = async () => {
      try {
        await Axios.get(`${API_URL}/api/verifyUser`);
        setContextVariables({
          ...contextVariables,
          loggedIn: true,
        });
      } catch (error) {
        setContextVariables({
          ...contextVariables,
          loggedIn: false,
        });
      }
    };
    verifyUser();
  }, []);

  return (
    <AppContext.Provider value={{contextVariables, setContextVariables}}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar backgroundColor="#910000" />
          <NavigationContainer>
            <Drawer.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#910000',
                },
                headerTitleStyle: {
                  fontSize: 25,
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
              }}
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
              {/* This home page would always show and content is determined based on login activity */}
              <Drawer.Screen
                name="Home"
                component={WelcomeScreen}
                options={{
                  drawerIcon: () => <Icon name="home" color="#C0C0C0" />,
                }}
              />

              {contextVariables.loggedIn === false ? (
                <>
                  {/* When not logged in */}
                  <Drawer.Screen
                    name="Login"
                    component={Login}
                    options={{
                      drawerIcon: () => <Icon name="login" color="#C0C0C0" />,
                    }}
                  />
                  <Drawer.Screen
                    name="Register"
                    component={Register}
                    options={{
                      drawerIcon: () => (
                        <Icon name="user" type="font-awesome" color="#C0C0C0" />
                      ),
                    }}
                  />
                  {/* <Drawer.Screen
                    name="About"
                    component={About}
                    options={{
                      drawerIcon: () => <Icon name="info" color="#C0C0C0" />,
                    }}
                  /> */}
                </>
              ) : (
                <>
                  {/* When logged in */}
                  <Drawer.Screen
                    name="Products"
                    component={ProductsHome}
                    options={{
                      drawerIcon: () => (
                        <Icon
                          name="box-open"
                          type="font-awesome-5"
                          color="#C0C0C0"
                        />
                      ),
                    }}
                  />
                  <Drawer.Screen
                    name="Forum"
                    component={ForumHome}
                    options={{
                      drawerIcon: () => (
                        <Icon
                          name="pen"
                          type="font-awesome-5"
                          color="#C0C0C0"
                        />
                      ),
                    }}
                  />
                  <Drawer.Screen
                    name="Groups"
                    component={GroupsTab}
                    options={{
                      drawerIcon: () => (
                        <Icon
                          name="group"
                          type="font-awesome"
                          color="#C0C0C0"
                        />
                      ),
                    }}
                  />
                  <Drawer.Screen
                    name="Profile"
                    component={UserProfileTab}
                    options={{
                      drawerIcon: () => (
                        <Icon
                          name="user"
                          type="font-awesome-5"
                          color="#C0C0C0"
                        />
                      ),
                    }}
                  />
                  <Drawer.Screen
                    name="Producer Mode"
                    component={ProducerTab}
                    options={{
                      drawerIcon: () => (
                        <Icon name="attach-money" color="#C0C0C0" />
                      ),
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
                      drawerIcon: () => (
                        <Icon name="hourglass-top" color="#C0C0C0" />
                      ),
                    }}
                  />
                  {/* <Drawer.Screen
                    name="About"
                    component={About}
                    options={{
                      drawerIcon: () => <Icon name="info" color="#C0C0C0" />,
                    }}
                  /> */}
                  <Drawer.Screen
                    name="Logout"
                    component={Logout}
                    options={{
                      drawerIcon: () => (
                        <Icon
                          name="sign-out"
                          type="font-awesome"
                          color="#C0C0C0"
                        />
                      ),
                    }}
                  />
                </>
              )}
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </AppContext.Provider>
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
