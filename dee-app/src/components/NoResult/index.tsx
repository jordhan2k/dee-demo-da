import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {icons} from '../../assets/icons';
import {commonStyles} from '../styles';

interface INoResult {
  message?: string;
}

const NoResult = (props: INoResult) => {
  const {message = 'Oops! No item has been found!'} = props;
  return (
    <View style={[commonStyles.fullWidth, commonStyles.centerContent]}>
      <FastImage source={icons.noResult} style={commonStyles.errorImage} />
      <Text style={commonStyles.errorHeading}>{message}</Text>
    </View>
  );
};

export default NoResult;
