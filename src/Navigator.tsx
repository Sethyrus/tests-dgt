import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import React from 'react';
import Header from './components/Header';
import TestsScreen from './screens/TestsScreen';
import TestScreen from './screens/TestScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions | ((props: {
  route: Route<string, object>;
  navigation: any;
}) => StackNavigationOptions) = {
  header: (props) => <Header {...props} />,
}

export type RootStackParamList = {
  Home: undefined;
  Tests: undefined;
  Test: {
    test: any,
  };
};

const MainStack = () => (
  <Stack.Navigator headerMode='float' screenOptions={screenOptions}>
    <Stack.Screen options={{ title: 'Inicio' }} name="Home" component={HomeScreen} />
    <Stack.Screen options={{ title: 'Tests generales DGT' }} name="Tests" component={TestsScreen} />
    <Stack.Screen options={{ title: 'Test' }} name="Test" component={TestScreen} />
  </Stack.Navigator>
);


const Navigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerPosition='right'>
      <Drawer.Screen name="Home" component={MainStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigator