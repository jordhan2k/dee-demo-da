import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {commonStyles} from '../components/styles';
import store from '../stores';
import StackNavigator from './StackNavigator';
import Toast from 'react-native-toast-message';

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={commonStyles.flexView}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StackNavigator />
            <Toast />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default AppNavigator;
