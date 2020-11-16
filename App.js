import React from 'react';
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
import PublicScreens from './components/PublicScreens';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ProductsHome from './components/products/ProductsHome';
import ForumHome from './components/forum/ForumHome';
import UserProfileTab from './components/user/Profile/UserProfileTab';
import ProducerTab from './components/producer/ProducerTab';
import GroupsTab from './components/groups/GroupsTab';
import Messages from './components/user/Messages';
import About from './components/About';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          {/* When not logged in */}
          <Drawer.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'red',
              },
              headerTintColor: 'white',
              headerTitleAlign: 'center',
            }}>
            <Drawer.Screen name="Home" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
          {/* When Logged in */}
          {/* <Drawer.Navigator>
            <Drawer.Screen name="Products" component={ProductsHome} />
            <Drawer.Screen name="Forum" component={ForumHome} />
            <Drawer.Screen name="Groups" component={GroupsTab} />
            <Drawer.Screen name="Profile" component={UserProfileTab} />
            <Drawer.Screen name="Producer Mode" component={ProducerTab} />
            <Drawer.Screen name="Messages" component={Messages} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator> */}
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
