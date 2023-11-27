import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ScreenNames} from '../enums/screenList';
import DetailScreen from '../screens/Detail/DetailScreen';
import ListScreen from '../screens/List/ListScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.LIST}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name={ScreenNames.LIST} component={ListScreen} />
      <Stack.Screen name={ScreenNames.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
