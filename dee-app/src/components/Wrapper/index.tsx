import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../enums/colors';

const Wrapper = (props: any) => {
  const {children} = props;
  const insets = useSafeAreaInsets();
  const paddingInsets = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  };
  return <View style={[styles.container, paddingInsets]}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    width: '100%',
  },
});
