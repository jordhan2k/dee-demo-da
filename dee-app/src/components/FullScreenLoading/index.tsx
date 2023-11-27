import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from '../../enums/colors';
import {commonStyles} from '../styles';
import styles from './styles';

interface IFullScreenLoading {
  show: boolean;
}

const FullScreenLoading = (props: IFullScreenLoading) => {
  const {show} = props;
  return show ? (
    <View style={[styles.container, commonStyles.centerContent]}>
      <ActivityIndicator size={'large'} color={Colors.PRIMARY_500} />
    </View>
  ) : null;
};

export default FullScreenLoading;
