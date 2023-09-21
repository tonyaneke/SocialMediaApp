import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Routes from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabPost from '../components/ProfileTabPost/ProfileTabPost';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTab = createMaterialTopTabNavigator();

const Tab2 = () => {
  return (
    <View>
      <Text>This is tab 2</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View>
      <Text>This is tab 1</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ScrollView contentContainerStyle={{height: 1200}}>
      <ProfileTab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            elevation: 0,
            zIndex: 0,
          },
        }}>
        <ProfileTab.Screen
          name={'Tab1'}
          component={ProfileTabPost}
          options={{
            tabBarLabel: ({focused}) => {
              return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
            },
          }}
        />
        <ProfileTab.Screen
          name={'Tab2'}
          component={ProfileTabPost}
          options={{
            tabBarLabel: ({focused}) => {
              return <ProfileTabTitle title={'Videos'} isFocused={focused} />;
            },
          }}
        />
        <ProfileTab.Screen
          name={'Tab3'}
          component={ProfileTabPost}
          options={{
            tabBarLabel: ({focused}) => {
              return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
            },
          }}
        />
      </ProfileTab.Navigator>
    </ScrollView>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShow: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
