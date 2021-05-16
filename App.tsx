/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 *
 */

import React, { useCallback, useEffect, useMemo, useState, createContext } from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _ from 'lodash';


export const orangeColor = '#E7421B';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Detail from './src/screen/Detail';
import Login from './src/screen/Login';
import Signout from './src/screen/Signout';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const initialInfor = {
  email: '',
  password: '',
  isSignIn: false,
};

export const InforContext = createContext({
  infor: {},
  setInfor: (data: any) => {},
});

const Bottomtab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Signout" component={Signout} />
    </Tab.Navigator>
  );
}
const App = () => {
  const [infor, setInfor] = useState(initialInfor);
  console.log(infor.isSignIn)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InforContext.Provider
        value={{
          infor,
          setInfor
        }}
      >
        <NavigationContainer>
          <Stack.Navigator>
            {
              infor.isSignIn ? (

                <Stack.Screen name="Bottomtab" component={Bottomtab} />
              ) : (

                <Stack.Screen name="Login" component={Login} />
              )
            }
          </Stack.Navigator>
        </NavigationContainer>
      </InforContext.Provider>
    </SafeAreaView>
  );
};

export default App;
